import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk2_o-bcc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk2_o-bcc"/>`,
		"fallback": "dashicons:exit",
	});
}

export default Component;
