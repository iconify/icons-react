import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tub7k1bln.css';
import '../../css/q/q3_36q7xg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tub7k1bln"/><path class="q3_36q7xg"/>`,
		"fallback": "energy-icons:glasses-20",
	});
}

export default Component;
