import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tummrfb8r.css';
import '../../css/e/esxa21aaa.css';
import '../../css/x/x0ibg6b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tummrfb8r"/><path class="esxa21aaa"/><path class="x0ibg6b8h"/>`,
		"fallback": "eos-icons:cluster-management-outlined",
	});
}

export default Component;
