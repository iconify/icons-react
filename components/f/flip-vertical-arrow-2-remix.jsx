import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2b69wsff.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2b69wsff"/>`,
		"fallback": "streamline:flip-vertical-arrow-2-remix",
	});
}

export default Component;
