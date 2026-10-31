import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3mewwtws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i3mewwtws"/>`,
		"fallback": "lucide-extended:hot-air-balloon-filled",
	});
}

export default Component;
