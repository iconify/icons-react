import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/szxhkdbau.css';
import '../../css/n/n4g3xacqe.css';
import '../../css/r/r2kxiiuoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="szxhkdbau"/><path class="n4g3xacqe wm-a"/><path class="r2kxiiuoz wm-s"/></g>`,
		"fallback": "withicons:bell-dot-solid",
	});
}

export default Component;
