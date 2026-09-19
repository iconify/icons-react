import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pny3j9blh.css';
import '../../css/q/qczzyabmn.css';
import '../../css/i/i4kg29big.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pny3j9blh"/><path clip-rule="evenodd" class="qczzyabmn"/><path class="i4kg29big"/></g>`,
		"fallback": "fluent-emoji-flat:heart-hands-medium",
	});
}

export default Component;
