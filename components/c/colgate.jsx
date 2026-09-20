import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/su-ehlb8y.css';
import '../../css/a/alu2ms6-o.css';

const viewBox = {"width":249,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="su-ehlb8y"/><path class="alu2ms6-o"/></g>`,
		"fallback": "thesvg-color:colgate",
	});
}

export default Component;
