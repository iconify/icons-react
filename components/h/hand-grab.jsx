import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xry8s8b7z.css';
import '../../css/b/bk_stiw0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xry8s8b7z"/><path class="bk_stiw0p"/></g>`,
		"fallback": "hugeicons:hand-grab",
	});
}

export default Component;
