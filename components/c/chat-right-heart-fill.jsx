import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg_5oxbmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg_5oxbmd"/>`,
		"fallback": "bi:chat-right-heart-fill",
	});
}

export default Component;
