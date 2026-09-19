import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pj1h_sx9a.css';
import '../../css/c/ctue6gbzv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pj1h_sx9a"/><path class="ctue6gbzv"/></g>`,
		"fallback": "fluent-emoji-flat:heart-on-fire",
	});
}

export default Component;
