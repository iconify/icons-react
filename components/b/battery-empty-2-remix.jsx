import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pky2dkb4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pky2dkb4s"/>`,
		"fallback": "streamline:battery-empty-2-remix",
	});
}

export default Component;
