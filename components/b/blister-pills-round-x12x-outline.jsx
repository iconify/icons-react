import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xt9e4hbde.css';
import '../../css/z/zxzakowbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xt9e4hbde"/><path clip-rule="evenodd" class="zxzakowbq"/></g>`,
		"fallback": "healthicons:blister-pills-round-x12x-outline",
	});
}

export default Component;
