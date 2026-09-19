import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l407iv7wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l407iv7wk"/>`,
		"fallback": "akar-icons:arrow-down-thick",
	});
}

export default Component;
