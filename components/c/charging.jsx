import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3k1gxm3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3k1gxm3n"/>`,
		"fallback": "raphael:charging",
	});
}

export default Component;
