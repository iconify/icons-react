import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jth1l4h1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jth1l4h1w"/>`,
		"fallback": "uit:facebook-messenger-alt",
	});
}

export default Component;
