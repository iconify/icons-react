import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqsvitb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqsvitb5h"/>`,
		"fallback": "lucide-extended:box-filled",
	});
}

export default Component;
