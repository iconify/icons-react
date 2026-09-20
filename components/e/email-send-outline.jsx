import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af8j95bax.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af8j95bax"/>`,
		"fallback": "lsicon:email-send-outline",
	});
}

export default Component;
