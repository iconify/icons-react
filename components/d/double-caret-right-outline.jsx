import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uevno-b1g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uevno-b1g"/>`,
		"fallback": "teenyicons:double-caret-right-outline",
	});
}

export default Component;
