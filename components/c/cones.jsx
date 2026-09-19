import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xwh7h2bfx.css';
import '../../css/g/g8e35kbyv.css';
import '../../css/y/yv76jrb0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="xwh7h2bfx"/><path class="g8e35kbyv"/><path class="yv76jrb0g"/></g>`,
		"fallback": "icon-park:cones",
	});
}

export default Component;
