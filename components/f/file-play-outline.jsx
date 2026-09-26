import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/drw22yl6e.css';
import '../../css/f/f_ieh2bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="drw22yl6e"/><path class="f_ieh2bbz"/></g>`,
		"fallback": "solar:file-play-outline",
	});
}

export default Component;
