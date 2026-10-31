import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g8ivu2lzf.css';
import '../../css/n/n8f4-6bdp.css';
import '../../css/a/atu0moblm.css';
import '../../css/u/u_t5u3muw.css';
import '../../css/b/boocv2bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g8ivu2lzf wm-shadow"/><path class="n8f4-6bdp"/><path class="atu0moblm"/><path class="u_t5u3muw"/><path class="boocv2bhr"/></g>`,
		"fallback": "withicons-retro:bot",
	});
}

export default Component;
