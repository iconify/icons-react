import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khfv6mq6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="khfv6mq6t"/>`,
		"fallback": "streamline-plump:inbox-content-remix",
	});
}

export default Component;
