import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xief-cxdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xief-cxdk"/>`,
		"fallback": "uil:css3-simple",
	});
}

export default Component;
