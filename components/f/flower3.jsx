import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuo_w0z7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuo_w0z7e"/>`,
		"fallback": "bi:flower3",
	});
}

export default Component;
