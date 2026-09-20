import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl_7wtbbd.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl_7wtbbd"/>`,
		"fallback": "octicon:diff",
	});
}

export default Component;
