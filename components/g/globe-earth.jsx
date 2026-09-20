import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap-28x_nd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap-28x_nd"/>`,
		"fallback": "wpf:globe-earth",
	});
}

export default Component;
