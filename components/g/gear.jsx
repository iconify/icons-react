import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wxzl2jb-y.css';
import '../../css/l/ldlhtkczy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wxzl2jb-y"/><path class="ldlhtkczy"/></g>`,
		"fallback": "reicon:gear",
	});
}

export default Component;
