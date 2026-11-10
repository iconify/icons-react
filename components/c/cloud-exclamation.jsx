import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdfu3-prn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdfu3-prn"/>`,
		"fallback": "sidekickicons:cloud-exclamation",
	});
}

export default Component;
