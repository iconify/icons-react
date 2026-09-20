import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dr81gjbdd.css';
import '../../css/h/h4_frbcfb.css';
import '../../css/q/qmhuddb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dr81gjbdd"/><circle class="h4_frbcfb"/><path class="qmhuddb0u"/></g>`,
		"fallback": "reicon:anchor",
	});
}

export default Component;
