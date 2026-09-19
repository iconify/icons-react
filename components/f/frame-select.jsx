import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufie9ebgy.css';
import '../../css/z/zep2h7-hf.css';
import '../../css/h/hbs97qgzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufie9ebgy"><path class="zep2h7-hf"/><path clip-rule="evenodd" class="hbs97qgzi"/></g>`,
		"fallback": "iconoir:frame-select",
	});
}

export default Component;
