import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmzjgcbbq.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmzjgcbbq"/>`,
		"fallback": "system-uicons:document-list",
	});
}

export default Component;
