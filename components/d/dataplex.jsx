import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/c/c7hthnbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="t_ev7s-sv"/><path class="c7hthnbyn"/></g>`,
		"fallback": "gcp:dataplex",
	});
}

export default Component;
