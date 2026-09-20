import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5r3k3vyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5r3k3vyu"/>`,
		"fallback": "pajamas:compass",
	});
}

export default Component;
