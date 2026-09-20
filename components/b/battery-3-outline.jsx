import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxmthib0s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxmthib0s"/>`,
		"fallback": "teenyicons:battery-3-outline",
	});
}

export default Component;
