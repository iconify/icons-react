import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb7_btbqb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb7_btbqb"/>`,
		"fallback": "ps:girl-o-mouth",
	});
}

export default Component;
