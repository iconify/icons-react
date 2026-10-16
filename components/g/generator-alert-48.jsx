import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw9nxhb5q.css';
import '../../css/a/aet2f2bmc.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw9nxhb5q"/><path class="aet2f2bmc"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:generator-alert-48",
	});
}

export default Component;
