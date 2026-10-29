import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ik7a-383e.css';
import '../../css/a/aukd1cbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ik7a-383e"/><path class="aukd1cbyr wm-a"/></g>`,
		"fallback": "withicons:crown-solid",
	});
}

export default Component;
