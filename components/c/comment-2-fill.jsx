import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8u1chjgn.css';
import '../../css/x/xl35czbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8u1chjgn"/><path class="xl35czbnm"/>`,
		"fallback": "mingcute:comment-2-fill",
	});
}

export default Component;
