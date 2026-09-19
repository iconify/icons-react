import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgva9kbpr.css';
import '../../css/l/lc3kdubbj.css';
import '../../css/f/fjgxjac4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="arrow-right-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tgva9kbpr"/><path class="lc3kdubbj"/><path class="fjgxjac4r"/></g></g>`,
		"fallback": "cuida:arrow-right-circle-outline",
	});
}

export default Component;
