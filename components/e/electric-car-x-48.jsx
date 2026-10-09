import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfdfq4bue.css';
import '../../css/i/iaalw5bbu.css';
import '../../css/t/t8dqc66mp.css';
import '../../css/v/vqbc74-cp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfdfq4bue"/><path class="iaalw5bbu"/><path class="t8dqc66mp"/><path class="vqbc74-cp"/>`,
		"fallback": "energy-icons:electric-car-x-48",
	});
}

export default Component;
