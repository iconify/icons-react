import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qluep-b3l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qluep-b3l"/>`,
		"fallback": "teenyicons:apple-outline",
	});
}

export default Component;
