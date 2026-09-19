import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0_3rzbxm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0_3rzbxm"/>`,
		"fallback": "fa7-solid:caravan",
	});
}

export default Component;
