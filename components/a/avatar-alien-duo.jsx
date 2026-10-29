import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ttsmw7bgp.css';
import '../../css/l/loevbjdhm.css';
import '../../css/s/s1kut8o6j.css';
import '../../css/f/f0xsko-4b.css';
import '../../css/g/guqhbex6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ttsmw7bgp"/><path class="loevbjdhm wm-a"/><path class="s1kut8o6j wm-s"/><path class="f0xsko-4b"/><path class="guqhbex6p wm-a"/></g>`,
		"fallback": "withicons:avatar-alien-duo",
	});
}

export default Component;
