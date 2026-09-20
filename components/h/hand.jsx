import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g96peuvhk.css';
import '../../css/x/xd22tjbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g96peuvhk"/><path class="xd22tjbkm"/></g>`,
		"fallback": "reicon:hand",
	});
}

export default Component;
