import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e_lg5ubec.css';
import '../../css/g/gb_2bdcnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e_lg5ubec wm-k"/><path class="gb_2bdcnx wm-a"/></g>`,
		"fallback": "withicons:a-large-small-gloss",
	});
}

export default Component;
