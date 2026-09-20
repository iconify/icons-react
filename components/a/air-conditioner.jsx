import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wpgd1nbzg.css';
import '../../css/v/v1e90jbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wpgd1nbzg"/><path class="v1e90jbgj"/></g>`,
		"fallback": "mynaui:air-conditioner",
	});
}

export default Component;
