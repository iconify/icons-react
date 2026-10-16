import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcia1ds6l.css';
import '../../css/f/fo9trqysu.css';
import '../../css/q/quuwtjdku.css';
import '../../css/f/fye7pfxns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcia1ds6l"/><path class="fo9trqysu"/><path class="quuwtjdku"/><path class="fye7pfxns"/>`,
		"fallback": "energy-icons:hazard-gas-20-bold",
	});
}

export default Component;
