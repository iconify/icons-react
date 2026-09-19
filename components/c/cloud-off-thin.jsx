import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/mr69ebfaw.css';
import '../../css/o/oc0vi5bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="mr69ebfaw"/><path class="oc0vi5bvd"/></g>`,
		"fallback": "iconamoon:cloud-off-thin",
	});
}

export default Component;
