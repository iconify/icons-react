import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilcfy8l9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ilcfy8l9u"/>`,
		"fallback": "lucide-extended:hop-filled",
	});
}

export default Component;
