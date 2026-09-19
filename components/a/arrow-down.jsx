import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zw9x8zb7y.css';
import '../../css/g/gicbit57r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zw9x8zb7y"/><path class="gicbit57r"/></g>`,
		"fallback": "icon-park:arrow-down",
	});
}

export default Component;
