import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp7d6dfdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp7d6dfdg"/>`,
		"fallback": "iconaut:bracket-right-duo",
	});
}

export default Component;
