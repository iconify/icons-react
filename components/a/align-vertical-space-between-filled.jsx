import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv5jycdoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv5jycdoi"/>`,
		"fallback": "lucide-extended:align-vertical-space-between-filled",
	});
}

export default Component;
