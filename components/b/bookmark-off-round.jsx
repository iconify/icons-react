import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9s0-fbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9s0-fbjw"/>`,
		"fallback": "coolicons:bookmark-off-round",
	});
}

export default Component;
