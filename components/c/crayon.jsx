import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm26zyb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm26zyb5j"/>`,
		"fallback": "simple-icons:crayon",
	});
}

export default Component;
