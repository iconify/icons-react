import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtuiqcb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtuiqcb_s"/>`,
		"fallback": "mdi:alphabet-y-circle-outline",
	});
}

export default Component;
