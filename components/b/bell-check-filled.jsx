import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikzgpudrt.css';
import '../../css/d/dxc9wabla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikzgpudrt"/><path class="dxc9wabla"/>`,
		"fallback": "lucide-extended:bell-check-filled",
	});
}

export default Component;
