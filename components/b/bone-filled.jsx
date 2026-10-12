import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l94725b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l94725b2v"/>`,
		"fallback": "lucide-extended:bone-filled",
	});
}

export default Component;
