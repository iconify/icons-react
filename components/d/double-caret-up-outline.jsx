import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m133sabjq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m133sabjq"/>`,
		"fallback": "teenyicons:double-caret-up-outline",
	});
}

export default Component;
