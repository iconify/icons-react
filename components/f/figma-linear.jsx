import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gvhflea0d.css';
import '../../css/k/kq8vefznw.css';
import '../../css/p/pide31b3u.css';
import '../../css/q/qd7grabik.css';
import '../../css/h/hrnbbwbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gvhflea0d"/><path class="kq8vefznw"/><path class="pide31b3u"/><path class="qd7grabik"/><path class="hrnbbwbro"/></g>`,
		"fallback": "solar:figma-linear",
	});
}

export default Component;
