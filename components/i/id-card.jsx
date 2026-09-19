import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5p2s1bwc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5p2s1bwc"/>`,
		"fallback": "ion:id-card",
	});
}

export default Component;
