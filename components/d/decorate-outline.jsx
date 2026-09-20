import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuz046bft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuz046bft"/>`,
		"fallback": "lsicon:decorate-outline",
	});
}

export default Component;
