import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxxt4ab2l.css';
import '../../css/x/xjxuz58ji.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wxxt4ab2l"/><path class="xjxuz58ji"/></g>`,
		"fallback": "bi:file-earmark-spreadsheet-fill",
	});
}

export default Component;
