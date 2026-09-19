import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgne7_gbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgne7_gbe"/>`,
		"fallback": "boxicons:gift",
	});
}

export default Component;
