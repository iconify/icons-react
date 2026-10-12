import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebvylcb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebvylcb7o"/>`,
		"fallback": "lucide-extended:balloon-filled",
	});
}

export default Component;
