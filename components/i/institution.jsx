import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdc6cpb-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdc6cpb-k"/>`,
		"fallback": "cil:institution",
	});
}

export default Component;
