import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq7w9gcux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq7w9gcux"/>`,
		"fallback": "selfhst:amazon-prime",
	});
}

export default Component;
