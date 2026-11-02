import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqb9lzyli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqb9lzyli"/>`,
		"fallback": "mingcute:clock-1-line",
	});
}

export default Component;
