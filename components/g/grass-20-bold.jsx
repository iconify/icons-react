import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fad7f9tkf.css';
import '../../css/n/nq0-d_lbp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fad7f9tkf"/><path class="nq0-d_lbp"/>`,
		"fallback": "energy-icons:grass-20-bold",
	});
}

export default Component;
