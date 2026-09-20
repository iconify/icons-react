import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdk2ryvgs.css';
import '../../css/o/oxo9nw_dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdk2ryvgs"/><path class="oxo9nw_dc"/>`,
		"fallback": "token:ibat",
	});
}

export default Component;
