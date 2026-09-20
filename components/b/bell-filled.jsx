import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzyvu_nxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzyvu_nxl"/>`,
		"fallback": "tabler:bell-filled",
	});
}

export default Component;
