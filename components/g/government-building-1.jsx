import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zzdwbdbds.css';
import '../../css/a/a7z4qrb3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="zzdwbdbds"/><path class="a7z4qrb3g"/></g>`,
		"fallback": "streamline-plump:government-building-1",
	});
}

export default Component;
