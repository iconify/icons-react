import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gte1b_zmg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gte1b_zmg"/>`,
		"fallback": "teenyicons:contract-outline",
	});
}

export default Component;
