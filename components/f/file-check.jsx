import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4y0e8exz.css';
import '../../css/i/i2xq5jbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g4y0e8exz"/><path class="i2xq5jbza"/></g>`,
		"fallback": "mynaui:file-check",
	});
}

export default Component;
