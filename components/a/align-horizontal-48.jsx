import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z67jtbcgc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z67jtbcgc"/>`,
		"fallback": "energy-icons:align-horizontal-48",
	});
}

export default Component;
