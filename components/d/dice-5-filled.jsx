import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_-lavb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_-lavb-v"/>`,
		"fallback": "lucide-extended:dice-5-filled",
	});
}

export default Component;
