import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj0y3zbui.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj0y3zbui"/>`,
		"fallback": "octicon:inbox-fill-16",
	});
}

export default Component;
