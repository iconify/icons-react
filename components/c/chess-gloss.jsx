import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd1vp8bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd1vp8bpc"/>`,
		"fallback": "withicons:chess-gloss",
	});
}

export default Component;
