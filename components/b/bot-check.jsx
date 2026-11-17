import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piun2nb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piun2nb0z"/>`,
		"fallback": "lucide:bot-check",
	});
}

export default Component;
