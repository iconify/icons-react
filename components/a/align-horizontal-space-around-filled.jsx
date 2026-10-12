import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq6v1fb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq6v1fb2i"/>`,
		"fallback": "lucide-extended:align-horizontal-space-around-filled",
	});
}

export default Component;
