import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb7tk6biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb7tk6biy"/>`,
		"fallback": "lucide-extended:broom-sparkles-filled",
	});
}

export default Component;
