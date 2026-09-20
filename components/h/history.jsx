import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwj6e1baz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwj6e1baz"/>`,
		"fallback": "raphael:history",
	});
}

export default Component;
