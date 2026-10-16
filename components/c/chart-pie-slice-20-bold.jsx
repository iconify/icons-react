import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is2wtacnu.css';
import '../../css/w/wqs95_b4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is2wtacnu"/><path class="wqs95_b4l"/>`,
		"fallback": "energy-icons:chart-pie-slice-20-bold",
	});
}

export default Component;
