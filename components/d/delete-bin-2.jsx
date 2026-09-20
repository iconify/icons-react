import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nghp0vorx.css';
import '../../css/z/z1g4wbcge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nghp0vorx"/><path class="z1g4wbcge"/></g>`,
		"fallback": "streamline-freehand:delete-bin-2",
	});
}

export default Component;
