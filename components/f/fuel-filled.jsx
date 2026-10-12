import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fncit8v1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fncit8v1y"/>`,
		"fallback": "lucide-extended:fuel-filled",
	});
}

export default Component;
