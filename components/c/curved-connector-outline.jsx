import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvpuq0rfm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvpuq0rfm"/>`,
		"fallback": "teenyicons:curved-connector-outline",
	});
}

export default Component;
