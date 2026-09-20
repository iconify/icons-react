import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ore7j7b7q.css';
import '../../css/j/jtqqf76qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ore7j7b7q"/><path class="jtqqf76qb"/></g>`,
		"fallback": "proicons:angle",
	});
}

export default Component;
