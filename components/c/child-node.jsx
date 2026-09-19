import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnq6rt34g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnq6rt34g"/>`,
		"fallback": "carbon:child-node",
	});
}

export default Component;
