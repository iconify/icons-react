import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbi0yub_m.css';
import '../../css/m/msu5rib1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbi0yub_m"/><path class="msu5rib1x"/>`,
		"fallback": "energy-icons:camera-off-20",
	});
}

export default Component;
