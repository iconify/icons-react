import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbjl5x_qp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbjl5x_qp"/>`,
		"fallback": "selfhst:forte-light",
	});
}

export default Component;
