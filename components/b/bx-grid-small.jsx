import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfs4r6bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfs4r6bkd"/>`,
		"fallback": "bx:bx-grid-small",
	});
}

export default Component;
