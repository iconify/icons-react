import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e65x3t4hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e65x3t4hm"/>`,
		"fallback": "mdi-light:cancel",
	});
}

export default Component;
