import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/y/yuonfaclw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="shu3xdl9q"/><path class="yuonfaclw"/></g>`,
		"fallback": "akar-icons:face-neutral",
	});
}

export default Component;
