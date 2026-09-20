import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbvw4dxpk.css';
import '../../css/x/xulgcccfa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbvw4dxpk"/><path class="xulgcccfa"/></g>`,
		"fallback": "streamline-plump-color:card-game-diamond-flat",
	});
}

export default Component;
