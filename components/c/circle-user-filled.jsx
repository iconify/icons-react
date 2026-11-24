import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci6rqvkuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci6rqvkuw"/>`,
		"fallback": "lucide-extended:circle-user-filled",
	});
}

export default Component;
