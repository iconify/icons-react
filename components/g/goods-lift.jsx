import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew34l9b1e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew34l9b1e"/>`,
		"fallback": "temaki:goods-lift",
	});
}

export default Component;
