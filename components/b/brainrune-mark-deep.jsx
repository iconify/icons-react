import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u1yh-lbhi.css';
import '../../css/c/ctcjcdosq.css';
import '../../css/s/s1ol7dtju.css';
import '../../css/h/h698sbcca.css';

const viewBox = {"width":92,"height":92};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="u1yh-lbhi"/><g class="ctcjcdosq"><path class="s1ol7dtju"/><path class="h698sbcca"/></g></g>`,
		"fallback": "thesvg-color:brainrune-mark-deep",
	});
}

export default Component;
