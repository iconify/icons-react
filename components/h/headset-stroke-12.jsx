import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3_qp57di.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3_qp57di"/>`,
		"fallback": "garden:headset-stroke-12",
	});
}

export default Component;
