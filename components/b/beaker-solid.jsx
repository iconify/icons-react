import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xqq2o-5tg.css';
import '../../css/y/yxmv2db-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xqq2o-5tg"/><path class="yxmv2db-g"/></g>`,
		"fallback": "iconaut:beaker-solid",
	});
}

export default Component;
