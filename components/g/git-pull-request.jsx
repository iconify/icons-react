import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytr_51bee.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytr_51bee"/>`,
		"fallback": "octicon:git-pull-request",
	});
}

export default Component;
