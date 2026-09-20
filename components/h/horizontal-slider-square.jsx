import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tg4o35fti.css';
import '../../css/y/yidrmes3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="tg4o35fti"/><path class="yidrmes3f"/></g>`,
		"fallback": "streamline-plump:horizontal-slider-square",
	});
}

export default Component;
