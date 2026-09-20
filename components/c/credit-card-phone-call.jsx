import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hgo1krnaw.css';
import '../../css/u/u9f87bczh.css';
import '../../css/v/vq_tp9pjt.css';
import '../../css/m/mi8ahjb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hgo1krnaw"/><path class="u9f87bczh"/><path class="vq_tp9pjt"/><path class="mi8ahjb-u"/></g>`,
		"fallback": "streamline-freehand:credit-card-phone-call",
	});
}

export default Component;
