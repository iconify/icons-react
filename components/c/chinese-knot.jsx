import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v8m7inbfb.css';
import '../../css/j/jnbt18bdf.css';
import '../../css/t/t_je6obhj.css';
import '../../css/c/c22sqac_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v8m7inbfb"/><path class="jnbt18bdf wm-k"/><path class="t_je6obhj wm-a"/><path class="c22sqac_e wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chinese-knot",
	});
}

export default Component;
