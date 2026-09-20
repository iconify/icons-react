import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tk0gmcbcc.css';
import '../../css/u/u9p4c4uvm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tk0gmcbcc"/><path class="u9p4c4uvm"/></g>`,
		"fallback": "streamline:fastforward-clock-solid",
	});
}

export default Component;
