import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfcs2q2pz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfcs2q2pz"/>`,
		"fallback": "bi:chat-square-heart-fill",
	});
}

export default Component;
