import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6nl0kb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6nl0kb_b"/>`,
		"fallback": "hugeicons:filter-mail-edit",
	});
}

export default Component;
