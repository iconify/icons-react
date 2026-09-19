import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b0_9a-hye.css';
import '../../css/a/alp68_g1x.css';
import '../../css/y/yq35rx1fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="b0_9a-hye"/><path class="alp68_g1x"/><path class="yq35rx1fi"/></g>`,
		"fallback": "hugeicons:inbox-upload",
	});
}

export default Component;
