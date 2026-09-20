import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mbw-ykb3e.css';
import '../../css/d/d4slrv-ys.css';
import '../../css/p/pdp2tgbyv.css';
import '../../css/z/zsr3gvben.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mbw-ykb3e"/><path class="d4slrv-ys"/><path class="pdp2tgbyv"/><path class="zsr3gvben"/></g>`,
		"fallback": "streamline-plump-color:camera-1",
	});
}

export default Component;
