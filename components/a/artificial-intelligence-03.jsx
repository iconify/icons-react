import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zzhollb3y.css';
import '../../css/u/uonwztbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zzhollb3y"/><path class="uonwztbxh"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-03",
	});
}

export default Component;
