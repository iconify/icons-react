import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bitb3dbnh.css';
import '../../css/f/f_gl6gzhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bitb3dbnh"/><path class="f_gl6gzhj wm-a"/></g>`,
		"fallback": "withicons:edit-solid",
	});
}

export default Component;
