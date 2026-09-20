import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y-bvipb-v.css';
import '../../css/e/edj3cglho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y-bvipb-v"/><path class="edj3cglho"/></g>`,
		"fallback": "solar:folder-lock-outline",
	});
}

export default Component;
