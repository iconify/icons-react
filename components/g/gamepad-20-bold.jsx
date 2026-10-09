import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0lzq_bbj.css';
import '../../css/s/s_30dcbkg.css';
import '../../css/u/ujgabjbbe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0lzq_bbj"/><path class="s_30dcbkg"/><path class="ujgabjbbe"/>`,
		"fallback": "energy-icons:gamepad-20-bold",
	});
}

export default Component;
