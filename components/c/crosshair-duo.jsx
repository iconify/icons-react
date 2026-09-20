import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/a/aqg12fsbq.css';
import '../../css/z/z7yk1fbeb.css';
import '../../css/j/juc_n8brf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path class="aqg12fsbq"/><path class="z7yk1fbeb"/><path class="juc_n8brf"/></g>`,
		"fallback": "streamline-kameleon-color:crosshair-duo",
	});
}

export default Component;
