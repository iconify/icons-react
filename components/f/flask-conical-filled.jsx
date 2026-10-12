import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfop6ibib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dfop6ibib"/>`,
		"fallback": "lucide-extended:flask-conical-filled",
	});
}

export default Component;
