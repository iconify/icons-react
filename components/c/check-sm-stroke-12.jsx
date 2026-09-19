import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql09f5usd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql09f5usd"/>`,
		"fallback": "garden:check-sm-stroke-12",
	});
}

export default Component;
