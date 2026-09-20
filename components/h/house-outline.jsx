import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icl41xlnh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icl41xlnh"/>`,
		"fallback": "lsicon:house-outline",
	});
}

export default Component;
