import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xnrrh_l-j.css';
import '../../css/v/vcrsiuejb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xnrrh_l-j"/><path class="vcrsiuejb"/></g>`,
		"fallback": "hugeicons:folder-shared-02",
	});
}

export default Component;
