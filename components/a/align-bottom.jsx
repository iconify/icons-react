import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx8y2ds-k.css';
import '../../css/i/iktc6lbdf.css';
import '../../css/o/oli4db1ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gx8y2ds-k"><path class="iktc6lbdf"/><path class="oli4db1ir"/></g>`,
		"fallback": "akar-icons:align-bottom",
	});
}

export default Component;
