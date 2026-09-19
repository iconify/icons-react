import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d_va3bk3v.css';
import '../../css/w/whmd-zbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d_va3bk3v"/><path class="whmd-zbru"/></g>`,
		"fallback": "healthicons:foot-outline",
	});
}

export default Component;
