import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t6zym0e7z.css';
import '../../css/r/r2lxn6bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t6zym0e7z"/><path class="r2lxn6bao"/></g>`,
		"fallback": "andrsrxn:arrow-corner-down-right",
	});
}

export default Component;
