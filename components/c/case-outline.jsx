import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aia290iyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aia290iyf"/>`,
		"fallback": "solar:case-outline",
	});
}

export default Component;
