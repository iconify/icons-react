import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7s-3o5ea.css';
import '../../css/c/cd94oju7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7s-3o5ea"/><path clip-rule="evenodd" class="cd94oju7l"/>`,
		"fallback": "lucide-extended:crosshair-filled",
	});
}

export default Component;
