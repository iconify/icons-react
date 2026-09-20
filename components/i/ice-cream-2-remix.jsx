import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu7h6bc4a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu7h6bc4a"/>`,
		"fallback": "streamline-flex:ice-cream-2-remix",
	});
}

export default Component;
