import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g29tunbon.css';
import '../../css/l/l72q2c0ph.css';
import '../../css/d/d8cw6abta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g29tunbon"/><path class="l72q2c0ph"/><path class="d8cw6abta"/></g>`,
		"fallback": "streamline-freehand:accounting-invoice",
	});
}

export default Component;
