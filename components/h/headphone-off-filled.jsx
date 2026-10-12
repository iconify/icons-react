import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blx7dw47b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blx7dw47b"/>`,
		"fallback": "lucide-extended:headphone-off-filled",
	});
}

export default Component;
