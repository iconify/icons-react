import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oidqe-epu.css';
import '../../css/y/yysf335sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oidqe-epu"/><path class="yysf335sa"/></g>`,
		"fallback": "hugeicons:dropbox",
	});
}

export default Component;
