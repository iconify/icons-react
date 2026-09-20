import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zd2s8xmoy.css';
import '../../css/z/zdh_jsyip.css';
import '../../css/u/ude1m_b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zd2s8xmoy"/><path clip-rule="evenodd" class="zdh_jsyip"/><path class="ude1m_b4z"/></g>`,
		"fallback": "reicon:bandage2-filled",
	});
}

export default Component;
