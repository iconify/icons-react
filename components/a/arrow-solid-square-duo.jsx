import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7cqu14cb.css';
import '../../css/h/h2eecabmn.css';
import '../../css/v/v90nhibmu.css';
import '../../css/h/hg98oub6d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7cqu14cb"/><path class="h2eecabmn"/><path class="v90nhibmu"/><path class="hg98oub6d"/></g>`,
		"fallback": "glyphs:arrow-solid-square-duo",
	});
}

export default Component;
