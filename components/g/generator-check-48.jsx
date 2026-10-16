import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw9nxhb5q.css';
import '../../css/a/aet2f2bmc.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw9nxhb5q"/><path class="aet2f2bmc"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:generator-check-48",
	});
}

export default Component;
