import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_3gt5b-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_3gt5b-r"/>`,
		"fallback": "streamline:earth-1-remix",
	});
}

export default Component;
