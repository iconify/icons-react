import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_z97d1ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_z97d1ap"/>`,
		"fallback": "boxicons:incognito",
	});
}

export default Component;
