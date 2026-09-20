import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8i_ynbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8i_ynbbv"/>`,
		"fallback": "tabler:align-box-center-middle-filled",
	});
}

export default Component;
