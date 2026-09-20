import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d07b03tyi.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d07b03tyi"/>`,
		"fallback": "lineicons:info",
	});
}

export default Component;
