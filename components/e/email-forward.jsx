import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk99svbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kk99svbkr"/>`,
		"fallback": "griddy-icons:email-forward",
	});
}

export default Component;
