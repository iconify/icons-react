import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqb-30dti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqb-30dti"/>`,
		"fallback": "codicon:beaker",
	});
}

export default Component;
