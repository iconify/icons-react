import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mn56eubrm.css';
import '../../css/c/cnv66pbtf.css';
import '../../css/j/jbq0mbbpz.css';
import '../../css/u/u3u0yrb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mn56eubrm wm-shadow"/><path class="cnv66pbtf wm-shadow"/><path class="jbq0mbbpz"/><path class="u3u0yrb0l"/></g>`,
		"fallback": "withicons-brutal:beer",
	});
}

export default Component;
