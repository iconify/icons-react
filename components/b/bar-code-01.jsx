import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd9l58i1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd9l58i1g"/>`,
		"fallback": "hugeicons:bar-code-01",
	});
}

export default Component;
