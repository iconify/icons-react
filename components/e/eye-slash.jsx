import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h11-d8b9r.css';
import '../../css/h/h00qcdc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h11-d8b9r"/><path class="h00qcdc0s"/></g>`,
		"fallback": "mynaui:eye-slash",
	});
}

export default Component;
