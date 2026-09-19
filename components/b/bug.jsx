import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/slhe7zbmn.css';
import '../../css/m/m33g7rbqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="slhe7zbmn"/><path class="m33g7rbqu"/></g>`,
		"fallback": "charm:bug",
	});
}

export default Component;
