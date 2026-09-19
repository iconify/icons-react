import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnu82-r0e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnu82-r0e"/>`,
		"fallback": "bi:emoji-frown-fill",
	});
}

export default Component;
