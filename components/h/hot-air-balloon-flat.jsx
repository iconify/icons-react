import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0wmq8b7m.css';
import '../../css/s/s7kw4nepq.css';
import '../../css/b/bsy6vgbmq.css';
import '../../css/p/p0yn8_blz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g0wmq8b7m"/><path clip-rule="evenodd" class="s7kw4nepq"/><path class="bsy6vgbmq"/><path class="p0yn8_blz"/></g>`,
		"fallback": "streamline-plump-color:hot-air-balloon-flat",
	});
}

export default Component;
