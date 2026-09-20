import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bz9vesfmm.css';
import '../../css/x/xbxc1rbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bz9vesfmm"/><path class="xbxc1rbdc"/></g>`,
		"fallback": "streamline-ultimate:curly-brackets",
	});
}

export default Component;
