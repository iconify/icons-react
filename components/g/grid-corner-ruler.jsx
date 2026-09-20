import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m757ceb0k.css';
import '../../css/h/hqun_2bqs.css';
import '../../css/k/k-oxz-ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m757ceb0k"/><path class="hqun_2bqs"/><path class="k-oxz-ble"/></g>`,
		"fallback": "streamline-freehand:grid-corner-ruler",
	});
}

export default Component;
