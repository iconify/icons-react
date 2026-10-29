import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x5ojuabic.css';
import '../../css/n/n4g3xacqe.css';
import '../../css/h/had5yxhdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x5ojuabic"/><path class="n4g3xacqe wm-a"/><path class="had5yxhdj wm-s"/></g>`,
		"fallback": "withicons:bell-minus-solid",
	});
}

export default Component;
