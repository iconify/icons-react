import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezwopb-j.css';
import '../../css/x/xc-zgrb_m.css';
import '../../css/h/hjcr5ccak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezwopb-j"/><path class="xc-zgrb_m"/><path class="hjcr5ccak"/>`,
		"fallback": "energy-icons:file-x-48",
	});
}

export default Component;
