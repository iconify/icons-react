import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g7v77rsge.css';
import '../../css/o/o18h_absn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="g7v77rsge"/><path class="o18h_absn"/></g>`,
		"fallback": "charm:briefcase",
	});
}

export default Component;
