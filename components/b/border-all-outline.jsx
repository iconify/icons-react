import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hui9kbcjq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hui9kbcjq"/>`,
		"fallback": "teenyicons:border-all-outline",
	});
}

export default Component;
