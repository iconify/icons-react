import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ymbr7_b9j.css';
import '../../css/p/pmol4zbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ymbr7_b9j"/><path class="pmol4zbxj wm-a"/></g>`,
		"fallback": "withicons:graduation-cap-solid",
	});
}

export default Component;
