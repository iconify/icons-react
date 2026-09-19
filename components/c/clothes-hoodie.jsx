import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/is34wybgi.css';
import '../../css/w/wjvt9sb8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="is34wybgi"/><path class="wjvt9sb8g"/></g>`,
		"fallback": "icon-park:clothes-hoodie",
	});
}

export default Component;
