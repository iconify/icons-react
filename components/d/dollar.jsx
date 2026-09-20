import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pufh1-b6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pufh1-b6e"/>`,
		"fallback": "raphael:dollar",
	});
}

export default Component;
