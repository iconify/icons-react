import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ut3m-xgzx.css';
import '../../css/z/zzysabe-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ut3m-xgzx"/><path class="zzysabe-k"/></g>`,
		"fallback": "iconoir:album-carousel",
	});
}

export default Component;
