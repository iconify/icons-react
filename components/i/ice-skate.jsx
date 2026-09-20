import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq-g64b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq-g64b7e"/>`,
		"fallback": "lucide-lab:ice-skate",
	});
}

export default Component;
