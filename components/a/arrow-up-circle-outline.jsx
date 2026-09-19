import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgva9kbpr.css';
import '../../css/w/wdqybvf7q.css';
import '../../css/n/n3hg-5nmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="arrow-up-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tgva9kbpr"/><path class="wdqybvf7q"/><path class="n3hg-5nmz"/></g></g>`,
		"fallback": "cuida:arrow-up-circle-outline",
	});
}

export default Component;
