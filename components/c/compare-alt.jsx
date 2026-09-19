import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql0f65czi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b ql0f65czi"/>`,
		"fallback": "boxicons:compare-alt",
	});
}

export default Component;
