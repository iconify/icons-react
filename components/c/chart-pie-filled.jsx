import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yno5idtej.css';
import '../../css/u/uve6c28av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yno5idtej"/><path class="uve6c28av"/>`,
		"fallback": "tdesign:chart-pie-filled",
	});
}

export default Component;
