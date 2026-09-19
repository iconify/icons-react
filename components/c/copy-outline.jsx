import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvpxb3b_i.css';
import '../../css/c/csmkm1zkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="copy-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="qvpxb3b_i"/><path class="csmkm1zkw"/></g></g>`,
		"fallback": "cuida:copy-outline",
	});
}

export default Component;
