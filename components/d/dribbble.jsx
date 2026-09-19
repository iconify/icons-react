import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n26_2eg4e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n26_2eg4e"/>`,
		"fallback": "whh:dribbble",
	});
}

export default Component;
