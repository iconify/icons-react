import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b5sbqlbxq.css';
import '../../css/s/ssur4bbuf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b5sbqlbxq"/><path class="ssur4bbuf"/></g>`,
		"fallback": "healthicons:baby-female-0203m-alt2x-outline",
	});
}

export default Component;
