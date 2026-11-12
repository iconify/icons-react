import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyu4b0bqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyu4b0bqn"/>`,
		"fallback": "selfhst:altcha-dark",
	});
}

export default Component;
