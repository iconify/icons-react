import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_8an-qku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_8an-qku"/>`,
		"fallback": "boxicons:dashboard",
	});
}

export default Component;
