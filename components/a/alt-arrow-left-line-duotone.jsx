import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7u6q5tnf.css';
import '../../css/b/b1_tb3awx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b7u6q5tnf"/><path class="b1_tb3awx"/></g>`,
		"fallback": "solar:alt-arrow-left-line-duotone",
	});
}

export default Component;
