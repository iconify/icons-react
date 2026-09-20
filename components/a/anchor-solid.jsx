import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiu4-0byu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yiu4-0byu"/>`,
		"fallback": "teenyicons:anchor-solid",
	});
}

export default Component;
