import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gax_u08rx.css';
import '../../css/t/tq0y-p-0s.css';
import '../../css/a/ajqhpcbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gax_u08rx"/><path class="tq0y-p-0s"/><path class="ajqhpcbca"/></g>`,
		"fallback": "reicon:calendar-add3",
	});
}

export default Component;
