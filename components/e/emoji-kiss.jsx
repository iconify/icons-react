import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zps83bc6c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zps83bc6c"/>`,
		"fallback": "bi:emoji-kiss",
	});
}

export default Component;
