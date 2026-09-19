import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/glvsanvuf.css';
import '../../css/y/yv713vosb.css';
import '../../css/y/yb0-hsb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="download-cloud-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="glvsanvuf"/><path class="yv713vosb"/><path class="yb0-hsb_x"/></g></g>`,
		"fallback": "cuida:download-cloud-outline",
	});
}

export default Component;
