import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm8xffb_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm8xffb_h"/>`,
		"fallback": "charm:flame",
	});
}

export default Component;
