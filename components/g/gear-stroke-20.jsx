import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jow4vojth.css';
import '../../css/k/k3_q2gqev.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jow4vojth"/><path class="k3_q2gqev"/>`,
		"fallback": "garden:gear-stroke-20",
	});
}

export default Component;
