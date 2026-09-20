import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-t-g0bba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t-t-g0bba"/>`,
		"fallback": "streamline:inbox-favorite-remix",
	});
}

export default Component;
