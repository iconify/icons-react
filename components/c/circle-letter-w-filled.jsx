import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2rzysexz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v2rzysexz"/>`,
		"fallback": "lucide-extended:circle-letter-w-filled",
	});
}

export default Component;
