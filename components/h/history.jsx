import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjp5kfbwt.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjp5kfbwt"/>`,
		"fallback": "icomoon-free:history",
	});
}

export default Component;
