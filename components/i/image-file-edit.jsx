import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iommg1o1p.css';
import '../../css/t/tokjrac3q.css';
import '../../css/t/tyjp77crt.css';
import '../../css/i/i38q3rydq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iommg1o1p"/><path class="tokjrac3q"/><path class="tyjp77crt"/><path class="i38q3rydq"/></g>`,
		"fallback": "streamline-freehand-color:image-file-edit",
	});
}

export default Component;
