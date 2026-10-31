import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g0nd4q76s.css';
import '../../css/i/inic47bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g0nd4q76s wm-k"/><path class="inic47bnq wm-k"/></g>`,
		"fallback": "withicons:avatar-man-turban-gloss",
	});
}

export default Component;
