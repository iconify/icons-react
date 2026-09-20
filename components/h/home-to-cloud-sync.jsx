import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lxpod3bgq.css';
import '../../css/b/bv1op9jqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lxpod3bgq"/><path class="bv1op9jqd"/></g>`,
		"fallback": "streamline-freehand-color:home-to-cloud-sync",
	});
}

export default Component;
