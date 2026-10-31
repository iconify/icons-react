import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jxzjfpggr.css';
import '../../css/p/pcfq5ygad.css';
import '../../css/d/dfhc5fbya.css';
import '../../css/f/f9hsu-63x.css';
import '../../css/d/d_2obcbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jxzjfpggr wm-shadow"/><path class="pcfq5ygad"/><path class="dfhc5fbya"/><path class="f9hsu-63x"/><path class="d_2obcbhj"/></g>`,
		"fallback": "withicons-retro:cpu",
	});
}

export default Component;
