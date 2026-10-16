import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwfgn5qgs.css';
import '../../css/q/qa0e82m0b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwfgn5qgs"/><path class="qa0e82m0b"/>`,
		"fallback": "energy-icons:cable-joint-20-bold",
	});
}

export default Component;
