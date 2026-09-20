import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmt9c7d1y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmt9c7d1y"/>`,
		"fallback": "pinhead:fish-and-hook",
	});
}

export default Component;
