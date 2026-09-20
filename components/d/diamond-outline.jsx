import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfeaq_g8o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfeaq_g8o"/>`,
		"fallback": "teenyicons:diamond-outline",
	});
}

export default Component;
