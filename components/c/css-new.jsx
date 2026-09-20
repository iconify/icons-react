import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq_yi2-xa.css';
import '../../css/g/gusqowxtm.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq_yi2-xa"/><path class="gusqowxtm"/>`,
		"fallback": "thesvg-color:css-new",
	});
}

export default Component;
