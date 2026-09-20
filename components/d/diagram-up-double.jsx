import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yu0oygb4t.css';
import '../../css/r/r6a20cbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yu0oygb4t"/><path class="r6a20cbbd"/></g>`,
		"fallback": "streamline-ultimate:diagram-up-double",
	});
}

export default Component;
