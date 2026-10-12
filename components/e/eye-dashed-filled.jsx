import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j95p8463r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j95p8463r"/>`,
		"fallback": "lucide-extended:eye-dashed-filled",
	});
}

export default Component;
