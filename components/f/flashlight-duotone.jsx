import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbohwsbsg.css';
import '../../css/b/bxy3pr4qd.css';
import '../../css/y/ysvf8_8zz.css';
import '../../css/q/qzsejdbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wbohwsbsg"/><path clip-rule="evenodd" class="bxy3pr4qd"/><path class="ysvf8_8zz"/><path class="qzsejdbcb"/></g>`,
		"fallback": "reicon:flashlight-duotone",
	});
}

export default Component;
