import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rx79owipl.css';
import '../../css/j/jts7syarj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rx79owipl"/><path class="jts7syarj"/></g>`,
		"fallback": "hugeicons:copy-01",
	});
}

export default Component;
