import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu23libwc.css';
import '../../css/a/at1afwblx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu23libwc"/><path class="at1afwblx"/>`,
		"fallback": "vaadin:disc",
	});
}

export default Component;
