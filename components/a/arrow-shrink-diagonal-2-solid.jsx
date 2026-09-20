import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0ibg0ban.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d0ibg0ban"/>`,
		"fallback": "streamline:arrow-shrink-diagonal-2-solid",
	});
}

export default Component;
