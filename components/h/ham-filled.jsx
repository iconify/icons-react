import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8zqi2t4s.css';
import '../../css/x/x44at5b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8zqi2t4s"/><path clip-rule="evenodd" class="x44at5b5t"/>`,
		"fallback": "lucide-extended:ham-filled",
	});
}

export default Component;
