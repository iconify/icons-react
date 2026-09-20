import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvnl2-5op.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvnl2-5op"/>`,
		"fallback": "teenyicons:briefcase-alt-outline",
	});
}

export default Component;
