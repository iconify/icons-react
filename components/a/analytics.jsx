import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wadkze_ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wadkze_ck"/>`,
		"fallback": "uim:analytics",
	});
}

export default Component;
