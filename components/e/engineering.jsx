import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7953m5_e.css';
import '../../css/c/cfri2bcju.css';
import '../../css/k/kzrfz6b7a.css';
import '../../css/s/sh2vre-yh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7953m5_e"/><g class="cfri2bcju"><path class="kzrfz6b7a"/><path class="sh2vre-yh"/></g>`,
		"fallback": "flat-color-icons:engineering",
	});
}

export default Component;
