import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/v/v9tvxhixf.css';
import '../../css/z/zf-0vxlaq.css';
import '../../css/a/ajdt0ix9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="v9tvxhixf"/><path class="zf-0vxlaq"/><path class="ajdt0ix9z"/></g>`,
		"fallback": "withicons-brutal:compass",
	});
}

export default Component;
