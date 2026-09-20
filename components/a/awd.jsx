import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_4dh_bct.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_4dh_bct"/>`,
		"fallback": "picon:awd",
	});
}

export default Component;
