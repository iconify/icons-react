import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znkefbbam.css';
import '../../css/d/d322l4s1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znkefbbam"/><path class="d322l4s1v"/></g>`,
		"fallback": "fluent-emoji-flat:chestnut",
	});
}

export default Component;
