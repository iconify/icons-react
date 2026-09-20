import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzzd34c4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzzd34c4r"/>`,
		"fallback": "mingcute:blockquote-line",
	});
}

export default Component;
