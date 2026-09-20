import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umb6sxb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umb6sxb3o"/>`,
		"fallback": "mdi-light:email-open",
	});
}

export default Component;
