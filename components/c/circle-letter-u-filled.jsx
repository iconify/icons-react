import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbn6nc11z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbn6nc11z"/>`,
		"fallback": "lucide-extended:circle-letter-u-filled",
	});
}

export default Component;
