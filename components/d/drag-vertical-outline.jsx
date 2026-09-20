import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et8rym2vl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et8rym2vl"/>`,
		"fallback": "teenyicons:drag-vertical-outline",
	});
}

export default Component;
