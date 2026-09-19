import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/venh9ui1e.css';
import '../../css/m/m089qabxd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="venh9ui1e"/><path class="m089qabxd"/></g>`,
		"fallback": "healthicons:baby-female-0203m-outline",
	});
}

export default Component;
