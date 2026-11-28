import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqnh7lc1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqnh7lc1d"/>`,
		"fallback": "noviair:inbox-arrow-right",
	});
}

export default Component;
