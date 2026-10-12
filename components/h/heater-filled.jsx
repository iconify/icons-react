import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxekpbbhl.css';
import '../../css/i/i-u_0kb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hxekpbbhl"/><path class="i-u_0kb6p"/>`,
		"fallback": "lucide-extended:heater-filled",
	});
}

export default Component;
