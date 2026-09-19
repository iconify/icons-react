import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbf2u5b4s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbf2u5b4s"/>`,
		"fallback": "ep:grape",
	});
}

export default Component;
