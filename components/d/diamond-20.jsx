import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq_e-jbll.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq_e-jbll"/>`,
		"fallback": "energy-icons:diamond-20",
	});
}

export default Component;
