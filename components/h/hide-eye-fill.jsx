import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue2y6hb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ue2y6hb-w"/>`,
		"fallback": "lets-icons:hide-eye-fill",
	});
}

export default Component;
