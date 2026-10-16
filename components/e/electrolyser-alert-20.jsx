import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o640wlber.css';
import '../../css/w/woh0b19bt.css';
import '../../css/p/puz5jibvr.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o640wlber"/><path class="woh0b19bt"/><path class="puz5jibvr"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:electrolyser-alert-20",
	});
}

export default Component;
