import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv2u68byn.css';
import '../../css/h/hjfbf5arh.css';
import '../../css/u/uz5d7nbjs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv2u68byn"/><path class="hjfbf5arh"/><path class="uz5d7nbjs"/>`,
		"fallback": "energy-icons:flower-20-bold",
	});
}

export default Component;
