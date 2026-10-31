import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ostvrdp6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ostvrdp6s"/>`,
		"fallback": "coolicons:bookmark-minus-fill-round",
	});
}

export default Component;
