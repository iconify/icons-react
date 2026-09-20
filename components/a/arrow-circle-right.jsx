import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm2z4abdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm2z4abdk"/>`,
		"fallback": "uil:arrow-circle-right",
	});
}

export default Component;
