import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yzt6fpb4y.css';
import '../../css/f/fsfm5npcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yzt6fpb4y"/><path class="fsfm5npcq wm-a"/></g>`,
		"fallback": "withicons:bee-solid",
	});
}

export default Component;
