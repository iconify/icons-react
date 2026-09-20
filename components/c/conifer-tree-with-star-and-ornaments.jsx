import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2pacqbbm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2pacqbbm"/>`,
		"fallback": "pinhead:conifer-tree-with-star-and-ornaments",
	});
}

export default Component;
