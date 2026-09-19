import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhe6ibcui.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhe6ibcui"/>`,
		"fallback": "whh:infinity",
	});
}

export default Component;
