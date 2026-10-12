import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy9jdhnbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wy9jdhnbz"/>`,
		"fallback": "lucide-extended:cupcake-filled",
	});
}

export default Component;
