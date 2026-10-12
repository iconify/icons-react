import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rln4a3--c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rln4a3--c"/>`,
		"fallback": "lucide-extended:broom-filled",
	});
}

export default Component;
