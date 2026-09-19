import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqhd79w9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqhd79w9h"/>`,
		"fallback": "grommet-icons:gallery",
	});
}

export default Component;
