import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v06hknakp.css';
import '../../css/h/hwoujzbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v06hknakp"/><path class="hwoujzbaz wm-a"/></g>`,
		"fallback": "withicons:avatar-man-turban-solid",
	});
}

export default Component;
