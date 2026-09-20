import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfrim3bft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfrim3bft"/>`,
		"fallback": "lsicon:amount-down-two-outline",
	});
}

export default Component;
