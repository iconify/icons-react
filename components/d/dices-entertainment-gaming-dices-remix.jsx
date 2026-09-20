import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt37rrl1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kt37rrl1z"/>`,
		"fallback": "streamline-plump:dices-entertainment-gaming-dices-remix",
	});
}

export default Component;
