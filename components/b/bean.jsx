import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqjnh8bqj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqjnh8bqj"/>`,
		"fallback": "picon:bean",
	});
}

export default Component;
