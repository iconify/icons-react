import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t90_9xbww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t90_9xbww"/>`,
		"fallback": "healthicons:92x-outline",
	});
}

export default Component;
