import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qvwh-3bss.css';
import '../../css/z/zhuxn-b3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="qvwh-3bss"/><path class="zhuxn-b3y"/></g>`,
		"fallback": "icon-park-outline:inner-shadow-left",
	});
}

export default Component;
