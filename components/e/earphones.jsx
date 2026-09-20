import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezcpi4ljm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezcpi4ljm"/>`,
		"fallback": "simple-line-icons:earphones",
	});
}

export default Component;
