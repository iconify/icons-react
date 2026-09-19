import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1770sb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1770sb_k"/>`,
		"fallback": "cbi:friends-of-hue-flat-p",
	});
}

export default Component;
