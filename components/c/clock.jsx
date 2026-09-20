import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbwe8e7vg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbwe8e7vg"/>`,
		"fallback": "ix:clock",
	});
}

export default Component;
