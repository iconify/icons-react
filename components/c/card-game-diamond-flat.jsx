import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kk4rpcdzx.css';
import '../../css/k/kga3l6daa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kk4rpcdzx"/><path class="kga3l6daa"/></g>`,
		"fallback": "streamline-sharp-color:card-game-diamond-flat",
	});
}

export default Component;
