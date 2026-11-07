import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rb5lbohlx.css';
import '../../css/q/qf8hzevjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rb5lbohlx"/><path class="qf8hzevjt"/></g>`,
		"fallback": "solar:arrow-left-down-line-duotone",
	});
}

export default Component;
