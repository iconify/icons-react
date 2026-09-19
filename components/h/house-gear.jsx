import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsawj4hzf.css';
import '../../css/b/bo33om3gu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gsawj4hzf"/><path class="bo33om3gu"/></g>`,
		"fallback": "bi:house-gear",
	});
}

export default Component;
