import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h11-d8b9r.css';
import '../../css/j/jkon69jfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h11-d8b9r"/><path class="jkon69jfq"/></g>`,
		"fallback": "mynaui:eye",
	});
}

export default Component;
