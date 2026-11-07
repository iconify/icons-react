import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bohwribke.css';
import '../../css/o/omavtbb2c.css';
import '../../css/f/fvf6w1p5c.css';
import '../../css/n/n_45qf4se.css';
import '../../css/f/fs9keeb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bohwribke"/><path class="omavtbb2c"/><path class="fvf6w1p5c"/><path class="n_45qf4se"/><path class="fs9keeb2k"/></g>`,
		"fallback": "solar:chat-square-arrow-broken",
	});
}

export default Component;
