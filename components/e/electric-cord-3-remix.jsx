import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plls9j28h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="plls9j28h"/>`,
		"fallback": "streamline-sharp:electric-cord-3-remix",
	});
}

export default Component;
