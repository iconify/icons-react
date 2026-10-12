import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1g9m8u7c.css';
import '../../css/t/tm09_9c4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1g9m8u7c"/><path clip-rule="evenodd" class="tm09_9c4t"/>`,
		"fallback": "lucide-extended:briefcase-conveyor-belt-filled",
	});
}

export default Component;
