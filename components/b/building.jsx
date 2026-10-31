import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d1nr0kbus.css';
import '../../css/e/ery8ubcec.css';
import '../../css/e/ez-qsfbbw.css';
import '../../css/d/dfwb8nbeu.css';
import '../../css/j/jfqizobld.css';
import '../../css/p/p9665tbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d1nr0kbus wm-shadow"/><path class="ery8ubcec"/><path class="ez-qsfbbw"/><path class="dfwb8nbeu"/><path class="jfqizobld"/><path class="p9665tbyj"/></g>`,
		"fallback": "withicons-retro:building",
	});
}

export default Component;
