import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu060xb3h.css';
import '../../css/r/rcn884par.css';
import '../../css/e/e2ptqqbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mu060xb3h"/><path class="rcn884par"/><path class="e2ptqqbrs"/></g>`,
		"fallback": "reicon:grid-edit",
	});
}

export default Component;
