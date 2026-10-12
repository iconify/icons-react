import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz7ntqb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz7ntqb7j"/>`,
		"fallback": "lucide-extended:hexagon-filled",
	});
}

export default Component;
