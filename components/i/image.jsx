import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8mc9p7aq.css';
import '../../css/w/wlmt3rjgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8mc9p7aq"/><path class="wlmt3rjgk"/>`,
		"fallback": "boxicons:image",
	});
}

export default Component;
