import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ro6pyts-f.css';
import '../../css/y/ysbdpwbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ro6pyts-f"/><path class="ysbdpwbfz"/></g>`,
		"fallback": "solar:history-2-outline",
	});
}

export default Component;
