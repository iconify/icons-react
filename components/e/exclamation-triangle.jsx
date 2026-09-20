import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj5tiwb9w.css';
import '../../css/i/i_m5aoo-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj5tiwb9w"/><path class="i_m5aoo-e"/>`,
		"fallback": "prime:exclamation-triangle",
	});
}

export default Component;
