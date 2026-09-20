import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpu1kzy3e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpu1kzy3e"/>`,
		"fallback": "teenyicons:arrow-up-circle-outline",
	});
}

export default Component;
