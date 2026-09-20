import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng-7dbvkg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng-7dbvkg"/>`,
		"fallback": "lsicon:back-square-outline",
	});
}

export default Component;
