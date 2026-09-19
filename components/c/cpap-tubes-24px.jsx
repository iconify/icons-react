import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2f-vv4ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2f-vv4ph"/>`,
		"fallback": "healthicons:cpap-tubes-24px",
	});
}

export default Component;
