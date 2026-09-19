import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-k5ynfvo.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-k5ynfvo"/>`,
		"fallback": "brandico:facebook-rect",
	});
}

export default Component;
