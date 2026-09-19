import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w8ssl8bon.css';
import '../../css/d/dtntbjtpx.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w8ssl8bon"/><path class="dtntbjtpx"/><path class="tlhsqgbia"/></g>`,
		"fallback": "hugeicons:file-pound",
	});
}

export default Component;
