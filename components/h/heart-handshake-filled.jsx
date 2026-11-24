import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1xy5cu_z.css';
import '../../css/e/e3k62ibrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1xy5cu_z"/><path class="e3k62ibrs"/>`,
		"fallback": "lucide-extended:heart-handshake-filled",
	});
}

export default Component;
