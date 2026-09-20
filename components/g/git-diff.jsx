import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zatn0nbfw.css';
import '../../css/o/o-6d_8bvb.css';
import '../../css/h/hofyi4b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zatn0nbfw"/><path class="o-6d_8bvb"/><path class="hofyi4b8i"/></g>`,
		"fallback": "mynaui:git-diff",
	});
}

export default Component;
