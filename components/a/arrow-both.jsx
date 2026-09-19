import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0ie7db7s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0ie7db7s"/>`,
		"fallback": "codicon:arrow-both",
	});
}

export default Component;
