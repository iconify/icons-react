import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2x-w3b4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2x-w3b4j"/>`,
		"fallback": "lsicon:check-disabled-outline",
	});
}

export default Component;
