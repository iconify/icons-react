import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-419acyg.css';
import '../../css/w/woh0b19bt.css';
import '../../css/p/puz5jibvr.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-419acyg"/><path class="woh0b19bt"/><path class="puz5jibvr"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:electrolyser-check-20",
	});
}

export default Component;
