import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1s0x6x-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1s0x6x-m"/>`,
		"fallback": "lucide-extended:circle-bounce-filled",
	});
}

export default Component;
