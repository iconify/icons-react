import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/olzl9ub0u.css';
import '../../css/q/qmka5cuvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="olzl9ub0u"/><path class="qmka5cuvw"/></g>`,
		"fallback": "mynaui:airplay",
	});
}

export default Component;
