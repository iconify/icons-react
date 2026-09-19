import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6_vklbbl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6_vklbbl"/>`,
		"fallback": "bi:emoji-heart-eyes-fill",
	});
}

export default Component;
