import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwgcybb_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwgcybb_n"/>`,
		"fallback": "oui:boxes-horizontal",
	});
}

export default Component;
