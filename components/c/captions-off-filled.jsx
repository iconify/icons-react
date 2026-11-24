import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obe9jcnoy.css';
import '../../css/x/xnw8m44ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="obe9jcnoy"/><path class="xnw8m44ry"/>`,
		"fallback": "lucide-extended:captions-off-filled",
	});
}

export default Component;
