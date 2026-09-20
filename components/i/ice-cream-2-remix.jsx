import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3bux4e8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3bux4e8w"/>`,
		"fallback": "streamline-plump:ice-cream-2-remix",
	});
}

export default Component;
