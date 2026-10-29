import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cjddo7kdz.css';
import '../../css/a/aq25pubix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cjddo7kdz"/><path class="aq25pubix wm-s"/></g>`,
		"fallback": "withicons:church-solid",
	});
}

export default Component;
