import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3dbycbyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3dbycbyr"/>`,
		"fallback": "bi:emoji-kiss-fill",
	});
}

export default Component;
