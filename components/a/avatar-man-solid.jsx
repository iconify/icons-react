import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i_vlpebks.css';
import '../../css/x/x74m-4ttd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i_vlpebks"/><path class="wm-a x74m-4ttd"/></g>`,
		"fallback": "withicons:avatar-man-solid",
	});
}

export default Component;
