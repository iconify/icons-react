import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu08c4b4i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu08c4b4i"/>`,
		"fallback": "teenyicons:docker-outline",
	});
}

export default Component;
