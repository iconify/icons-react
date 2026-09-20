import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7u15bzg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny7u15bzg"/>`,
		"fallback": "lsicon:adjust-width-outline",
	});
}

export default Component;
