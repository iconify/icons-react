import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-7487brk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-7487brk"/>`,
		"fallback": "pinhead:four-legged-squid-with-cartoon-eyes",
	});
}

export default Component;
