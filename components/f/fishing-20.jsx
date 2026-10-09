import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxgw5_bly.css';
import '../../css/f/f1to3eutu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxgw5_bly"/><path class="f1to3eutu"/>`,
		"fallback": "energy-icons:fishing-20",
	});
}

export default Component;
