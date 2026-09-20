import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvheylb0f.css';
import '../../css/o/ov6wkoaje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvheylb0f"/><path class="ov6wkoaje"/></g>`,
		"fallback": "streamline-freehand:discount-sale-sign",
	});
}

export default Component;
