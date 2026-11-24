import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpyhw8k_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpyhw8k_h"/>`,
		"fallback": "lucide-extended:ice-cream-cone-filled",
	});
}

export default Component;
