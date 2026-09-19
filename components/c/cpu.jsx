import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nme9ebbkd.css';
import '../../css/q/q-4sl-tif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nme9ebbkd"/><path class="q-4sl-tif"/></g>`,
		"fallback": "hugeicons:cpu",
	});
}

export default Component;
