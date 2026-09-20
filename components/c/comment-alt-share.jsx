import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjwnkn-5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjwnkn-5i"/>`,
		"fallback": "uil:comment-alt-share",
	});
}

export default Component;
