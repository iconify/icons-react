import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfmo26buy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yfmo26buy"/>`,
		"fallback": "streamline:hierarchy-10-remix",
	});
}

export default Component;
