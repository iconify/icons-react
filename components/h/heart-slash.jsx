import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_yz9qbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_yz9qbsv"/>`,
		"fallback": "mynaui:heart-slash",
	});
}

export default Component;
