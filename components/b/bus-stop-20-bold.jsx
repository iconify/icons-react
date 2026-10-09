import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_hyg4qah.css';
import '../../css/i/ik7mbfb-f.css';
import '../../css/p/pyb0afbls.css';
import '../../css/j/jgs160bgs.css';
import '../../css/x/xdiltt19v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_hyg4qah"/><path class="ik7mbfb-f"/><path class="pyb0afbls"/><path class="jgs160bgs"/><path class="xdiltt19v"/>`,
		"fallback": "energy-icons:bus-stop-20-bold",
	});
}

export default Component;
