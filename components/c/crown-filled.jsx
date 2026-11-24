import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb4lz6bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb4lz6bjn"/>`,
		"fallback": "lucide-extended:crown-filled",
	});
}

export default Component;
