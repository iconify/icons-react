import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2huzkbqd.css';
import '../../css/u/uijt22b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k2huzkbqd"/><path class="uijt22b7u"/>`,
		"fallback": "lucide-extended:backpack-filled",
	});
}

export default Component;
