import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns1pa3bol.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns1pa3bol"/>`,
		"fallback": "streamline:flip-vertical-square-2",
	});
}

export default Component;
