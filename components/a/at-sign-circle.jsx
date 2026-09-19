import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d5j13pb9q.css';
import '../../css/q/q2y25-y2o.css';
import '../../css/g/g9bey28zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d5j13pb9q"/><path class="q2y25-y2o"/><path class="g9bey28zn"/></g>`,
		"fallback": "iconoir:at-sign-circle",
	});
}

export default Component;
