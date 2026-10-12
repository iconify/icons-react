import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qams0c-7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qams0c-7h"/>`,
		"fallback": "lucide-extended:align-vertical-justify-start-filled",
	});
}

export default Component;
