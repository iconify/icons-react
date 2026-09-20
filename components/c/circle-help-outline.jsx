import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps9e_1buy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps9e_1buy"/>`,
		"fallback": "lsicon:circle-help-outline",
	});
}

export default Component;
