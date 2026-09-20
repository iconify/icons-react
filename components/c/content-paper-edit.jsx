import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uhdeqebmj.css';
import '../../css/q/qd8r50b_e.css';
import '../../css/o/o6o8_t02x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uhdeqebmj"/><path class="qd8r50b_e"/><path class="o6o8_t02x"/></g>`,
		"fallback": "streamline-freehand:content-paper-edit",
	});
}

export default Component;
