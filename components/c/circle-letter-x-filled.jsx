import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql0sogb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ql0sogb0x"/>`,
		"fallback": "lucide-extended:circle-letter-x-filled",
	});
}

export default Component;
