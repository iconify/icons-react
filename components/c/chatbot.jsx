import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa-7_xqcy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa-7_xqcy"/>`,
		"fallback": "picon:chatbot",
	});
}

export default Component;
