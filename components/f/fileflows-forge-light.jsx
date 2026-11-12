import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9wlxgsem.css';
import '../../css/q/qj8o2tblv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9wlxgsem"/><path class="qj8o2tblv"/>`,
		"fallback": "selfhst:fileflows-forge-light",
	});
}

export default Component;
