import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezqrlfave.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezqrlfave"/>`,
		"fallback": "octicon:bold",
	});
}

export default Component;
