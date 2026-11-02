import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kno2i6eul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kno2i6eul"/>`,
		"fallback": "mingcute:android-2-line",
	});
}

export default Component;
