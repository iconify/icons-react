import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d4uexachr.css';
import '../../css/b/br_kd50dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d4uexachr"/><path class="br_kd50dq wm-a"/></g>`,
		"fallback": "withicons:candy-bucket-solid",
	});
}

export default Component;
