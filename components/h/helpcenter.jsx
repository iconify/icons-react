import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv4-3120a.css';
import '../../css/q/qou2q9m2p.css';
import '../../css/j/j2u06tb_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yv4-3120a"/><path class="qou2q9m2p"/><path clip-rule="evenodd" class="j2u06tb_o"/></g>`,
		"fallback": "icon-park:helpcenter",
	});
}

export default Component;
