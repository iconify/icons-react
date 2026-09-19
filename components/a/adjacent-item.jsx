import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc784jy4i.css';
import '../../css/d/d-7w0ebsy.css';
import '../../css/c/cri_8d0jy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kc784jy4i"/><path class="d-7w0ebsy"/><path class="cri_8d0jy"/></g>`,
		"fallback": "icon-park-outline:adjacent-item",
	});
}

export default Component;
