import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/id1-12b0u.css';
import '../../css/u/uh72fu0ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="id1-12b0u"/><path class="uh72fu0ru wm-s"/></g>`,
		"fallback": "withicons:cloud-download-solid",
	});
}

export default Component;
