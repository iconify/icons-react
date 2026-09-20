import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-6x6o-1h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v-6x6o-1h"/>`,
		"fallback": "streamline:electric-cord-1-remix",
	});
}

export default Component;
