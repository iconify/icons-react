import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xra29bcgj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xra29bcgj"/>`,
		"fallback": "roentgen:circle-with-dot",
	});
}

export default Component;
