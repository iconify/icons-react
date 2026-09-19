import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mim_u7m5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mim_u7m5c"/>`,
		"fallback": "cib:adguard",
	});
}

export default Component;
