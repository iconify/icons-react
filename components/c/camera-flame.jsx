import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylo6n1gfy.css';
import '../../css/q/qloronl4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ylo6n1gfy"/><path class="qloronl4r"/></g>`,
		"fallback": "tabler:camera-flame",
	});
}

export default Component;
