import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-6jcabcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-6jcabcu"/>`,
		"fallback": "lucide-extended:heart-filled",
	});
}

export default Component;
