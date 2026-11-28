import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfml255xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfml255xg"/>`,
		"fallback": "noviair-light:award-star",
	});
}

export default Component;
