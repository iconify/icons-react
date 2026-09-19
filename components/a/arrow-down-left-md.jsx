import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfedjsbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfedjsbrx"/>`,
		"fallback": "ci:arrow-down-left-md",
	});
}

export default Component;
