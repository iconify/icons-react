import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxnkhubbo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxnkhubbo"/>`,
		"fallback": "bi:grid-1x2",
	});
}

export default Component;
