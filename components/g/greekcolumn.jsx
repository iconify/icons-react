import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw-94rbdn.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw-94rbdn"/>`,
		"fallback": "whh:greekcolumn",
	});
}

export default Component;
