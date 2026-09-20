import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn3zk-1ub.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn3zk-1ub"/>`,
		"fallback": "lsicon:arrow-up-outline",
	});
}

export default Component;
