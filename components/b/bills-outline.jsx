import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wdfwc01wz.css';
import '../../css/s/s-odn9j2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wdfwc01wz"/><path class="s-odn9j2a"/></g>`,
		"fallback": "healthicons:bills-outline",
	});
}

export default Component;
