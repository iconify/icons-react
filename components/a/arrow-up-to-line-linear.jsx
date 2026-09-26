import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ah9s1bcom.css';
import '../../css/u/urjv1kbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ah9s1bcom"/><path class="urjv1kbgr"/></g>`,
		"fallback": "solar:arrow-up-to-line-linear",
	});
}

export default Component;
