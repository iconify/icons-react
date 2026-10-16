import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzeh33brv.css';
import '../../css/k/k2l56tbqb.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzeh33brv"/><path class="k2l56tbqb"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:industrial-boiler-48-bold",
	});
}

export default Component;
