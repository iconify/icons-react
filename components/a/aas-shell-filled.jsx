import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usw10sb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usw10sb1r"/>`,
		"fallback": "ix:aas-shell-filled",
	});
}

export default Component;
