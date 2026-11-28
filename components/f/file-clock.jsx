import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9mzy0bvl.css';
import '../../css/h/hji4qyb_f.css';
import '../../css/g/ggzc0sbvp.css';
import '../../css/f/f6e4wevlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y9mzy0bvl"/><path class="hji4qyb_f"/><path class="ggzc0sbvp"/><path class="f6e4wevlm"/></g>`,
		"fallback": "iconaut:file-clock",
	});
}

export default Component;
