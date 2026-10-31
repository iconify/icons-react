import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/edw7ytxwt.css';
import '../../css/u/u1x-h0bhr.css';
import '../../css/t/tv0eeab-q.css';
import '../../css/f/f5ct2663e.css';
import '../../css/z/z3dwp-bfu.css';
import '../../css/e/eexznicqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="edw7ytxwt wm-shadow"/><path class="u1x-h0bhr"/><path class="tv0eeab-q"/><path class="f5ct2663e"/><path class="z3dwp-bfu"/><path class="eexznicqp"/></g>`,
		"fallback": "withicons-retro:cube",
	});
}

export default Component;
