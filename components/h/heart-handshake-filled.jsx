import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6mxce4uq.css';
import '../../css/n/nuwhiyu0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6mxce4uq"/><path class="nuwhiyu0u"/>`,
		"fallback": "lucide-extended:heart-handshake-filled",
	});
}

export default Component;
