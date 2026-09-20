import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/j/jxhv6pb2q.css';
import '../../css/s/sa9yuacrk.css';
import '../../css/x/xp2bbwbqh.css';
import '../../css/b/baa-5bbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fyr67fbfm"/><path class="jxhv6pb2q"/><path class="sa9yuacrk"/><path class="xp2bbwbqh"/><path class="baa-5bbpt"/></g>`,
		"fallback": "solar:flash-drive-broken",
	});
}

export default Component;
