import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2-gn2biy.css';
import '../../css/j/j7v_czbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a2-gn2biy"/><path class="j7v_czbyc"/></g>`,
		"fallback": "vadivam:folder-symlink",
	});
}

export default Component;
