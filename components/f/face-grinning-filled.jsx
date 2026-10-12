import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv2urftea.css';
import '../../css/p/p03glfbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv2urftea"/><path clip-rule="evenodd" class="p03glfbus"/>`,
		"fallback": "lucide-extended:face-grinning-filled",
	});
}

export default Component;
