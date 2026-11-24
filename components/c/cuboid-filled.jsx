import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6b17ub6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6b17ub6a"/>`,
		"fallback": "lucide-extended:cuboid-filled",
	});
}

export default Component;
