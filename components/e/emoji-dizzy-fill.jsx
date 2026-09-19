import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn4-air-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn4-air-m"/>`,
		"fallback": "bi:emoji-dizzy-fill",
	});
}

export default Component;
