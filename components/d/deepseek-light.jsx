import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4wuv_o1q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4wuv_o1q"/>`,
		"fallback": "selfhst:deepseek-light",
	});
}

export default Component;
