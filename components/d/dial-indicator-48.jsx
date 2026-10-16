import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmtkecamq.css';
import '../../css/v/vv-azsxen.css';
import '../../css/s/sqh4xjrbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmtkecamq"/><path class="vv-azsxen"/><path class="sqh4xjrbe"/>`,
		"fallback": "energy-icons:dial-indicator-48",
	});
}

export default Component;
