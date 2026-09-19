import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng-l8i51q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng-l8i51q"/>`,
		"fallback": "dashicons:flag",
	});
}

export default Component;
