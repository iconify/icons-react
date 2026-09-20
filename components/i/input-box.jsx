import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v5zx551_x.css';
import '../../css/b/bfswbgf-c.css';
import '../../css/d/djn-xbnjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="v5zx551_x"/><path class="bfswbgf-c"/><path class="djn-xbnjg"/></g>`,
		"fallback": "streamline-plump-color:input-box",
	});
}

export default Component;
