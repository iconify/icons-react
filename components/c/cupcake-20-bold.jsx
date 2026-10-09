import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaa-d32jp.css';
import '../../css/q/qigsuypiz.css';
import '../../css/c/c8bngupzy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaa-d32jp"/><path class="qigsuypiz"/><path class="c8bngupzy"/>`,
		"fallback": "energy-icons:cupcake-20-bold",
	});
}

export default Component;
