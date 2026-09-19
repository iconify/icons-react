import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi34j4tzq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi34j4tzq"/>`,
		"fallback": "garden:check-lg-fill-12",
	});
}

export default Component;
