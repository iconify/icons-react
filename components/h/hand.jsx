import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-fjfmbhe.css';
import '../../css/y/yfjwkxb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y-fjfmbhe"/><path class="yfjwkxb-e"/></g>`,
		"fallback": "proicons:hand",
	});
}

export default Component;
