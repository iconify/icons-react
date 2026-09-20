import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gehve_c8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gehve_c8w"/>`,
		"fallback": "ix:chevron-up-bar",
	});
}

export default Component;
