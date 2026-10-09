import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n83w2qbdq.css';
import '../../css/u/um-eanbbz.css';
import '../../css/k/k3w3y09sg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n83w2qbdq"/><path class="um-eanbbz"/><path class="k3w3y09sg"/>`,
		"fallback": "energy-icons:beach-hut-20",
	});
}

export default Component;
