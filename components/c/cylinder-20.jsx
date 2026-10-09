import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbe-aclic.css';
import '../../css/i/iv-96i7pw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbe-aclic"/><path class="iv-96i7pw"/>`,
		"fallback": "energy-icons:cylinder-20",
	});
}

export default Component;
