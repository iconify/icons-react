import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7h7v2bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7h7v2bkc"/>`,
		"fallback": "lineicons:facebook-messenger",
	});
}

export default Component;
