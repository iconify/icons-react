import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/askomeufq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="askomeufq"/>`,
		"fallback": "streamline:dice-4-remix",
	});
}

export default Component;
