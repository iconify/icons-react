import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azc5oubyv.css';
import '../../css/q/q1hf-4bop.css';
import '../../css/p/pz9jt5fop.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azc5oubyv"/><path class="q1hf-4bop"/><path class="pz9jt5fop"/>`,
		"fallback": "energy-icons:hydrogen-station-20-bold",
	});
}

export default Component;
