import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhhwblbuq.css';
import '../../css/h/hnk5v_9zk.css';
import '../../css/f/fim_63bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhhwblbuq"/><path class="hnk5v_9zk"/><path class="fim_63bgh"/></g>`,
		"fallback": "proicons:bug-add",
	});
}

export default Component;
