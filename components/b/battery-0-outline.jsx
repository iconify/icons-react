import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sngn-6bwe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sngn-6bwe"/>`,
		"fallback": "teenyicons:battery-0-outline",
	});
}

export default Component;
