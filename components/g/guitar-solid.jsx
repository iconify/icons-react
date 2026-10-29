import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a3ey_6bgg.css';
import '../../css/s/s5fffsbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a3ey_6bgg"/><path class="s5fffsbhu wm-a"/></g>`,
		"fallback": "withicons:guitar-solid",
	});
}

export default Component;
