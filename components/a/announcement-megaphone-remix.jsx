import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0a033v1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n0a033v1i"/>`,
		"fallback": "streamline-plump:announcement-megaphone-remix",
	});
}

export default Component;
