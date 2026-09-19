import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hf8fe3d2n.css';
import '../../css/u/uj-tbwz8n.css';
import '../../css/o/o51cz7q6l.css';
import '../../css/r/r_ktmtjwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hf8fe3d2n"/><path class="uj-tbwz8n"/><path class="o51cz7q6l"/><path class="r_ktmtjwe"/></g>`,
		"fallback": "icon-park:full-screen",
	});
}

export default Component;
