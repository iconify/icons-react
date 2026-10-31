import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9x-rsbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9x-rsbqg"/>`,
		"fallback": "lucide-extended:circle-letter-n-filled",
	});
}

export default Component;
