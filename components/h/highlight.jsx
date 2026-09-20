import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj5drf1ms.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj5drf1ms"/>`,
		"fallback": "lineicons:highlight",
	});
}

export default Component;
