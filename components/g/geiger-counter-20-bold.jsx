import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siqjgac7n.css';
import '../../css/m/mplihkbyd.css';
import '../../css/h/hplakgb5n.css';
import '../../css/o/oh4_jp9dg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siqjgac7n"/><path class="mplihkbyd"/><path class="hplakgb5n"/><path class="oh4_jp9dg"/>`,
		"fallback": "energy-icons:geiger-counter-20-bold",
	});
}

export default Component;
