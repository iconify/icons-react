import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrkaw1ncp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrkaw1ncp"/>`,
		"fallback": "bi:emoji-grin-fill",
	});
}

export default Component;
