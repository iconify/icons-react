import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqk5i7b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqk5i7b1a"/>`,
		"fallback": "mingcute:ice-cream-line",
	});
}

export default Component;
