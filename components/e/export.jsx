import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/w/wlr_qlbtp.css';
import '../../css/q/qse46ibad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="wlr_qlbtp"/><path class="qse46ibad"/></g>`,
		"fallback": "tdesign:export",
	});
}

export default Component;
