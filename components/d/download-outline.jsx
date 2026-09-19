import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vomvm8bsb.css';
import '../../css/x/xh1xc8bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="download-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="vomvm8bsb"/><path class="xh1xc8bto"/></g></g>`,
		"fallback": "cuida:download-outline",
	});
}

export default Component;
