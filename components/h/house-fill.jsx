import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m84svr34v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m84svr34v"/>`,
		"fallback": "mingcute:house-fill",
	});
}

export default Component;
