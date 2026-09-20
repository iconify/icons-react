import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rq7rqmbxo.css';
import '../../css/t/tsqhlvbkz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rq7rqmbxo"/><path class="tsqhlvbkz"/></g>`,
		"fallback": "streamline-flex:arrow-cursor-click-2",
	});
}

export default Component;
