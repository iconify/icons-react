import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dn1pzokyp.css';
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
		"content": `<g class="hntgybcog"><path class="dn1pzokyp"/><path class="tq0y-p-0s"/><path class="ajqhpcbca"/></g>`,
		"fallback": "reicon:calendar-remove",
	});
}

export default Component;
