import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqbi2s1wa.css';
import '../../css/p/pa14hnb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqbi2s1wa"/><path class="pa14hnb-c"/>`,
		"fallback": "boxicons:clipboard-detail",
	});
}

export default Component;
