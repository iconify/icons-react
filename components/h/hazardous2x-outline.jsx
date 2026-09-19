import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hwhjx0vrs.css';
import '../../css/d/dpr6dv8_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hwhjx0vrs"/><path class="dpr6dv8_s"/></g>`,
		"fallback": "healthicons:hazardous2x-outline",
	});
}

export default Component;
