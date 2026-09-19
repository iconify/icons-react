import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhjwkd_5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhjwkd_5t"/>`,
		"fallback": "boxicons:horizontal-center-filled",
	});
}

export default Component;
