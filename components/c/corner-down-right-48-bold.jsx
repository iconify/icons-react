import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3__hfs6p.css';
import '../../css/z/zvtm7bcct.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3__hfs6p"/><path class="zvtm7bcct"/>`,
		"fallback": "energy-icons:corner-down-right-48-bold",
	});
}

export default Component;
