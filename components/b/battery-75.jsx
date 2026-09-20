import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q689h4b1l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q689h4b1l"/>`,
		"fallback": "memory:battery-75",
	});
}

export default Component;
