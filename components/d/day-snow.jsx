import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hwh0u9pgn.css';
import '../../css/m/mkfsuxb0u.css';
import '../../css/r/riwutnbjh.css';
import '../../css/b/b707iqbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="hwh0u9pgn"/><path class="mkfsuxb0u"/><path class="riwutnbjh"/><path class="b707iqbfi"/></g>`,
		"fallback": "streamline-cyber:day-snow",
	});
}

export default Component;
