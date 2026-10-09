import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_zubmb7j.css';
import '../../css/a/aqwmpmxfg.css';
import '../../css/d/d8xmubcoe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_zubmb7j"/><path class="aqwmpmxfg"/><path class="d8xmubcoe"/>`,
		"fallback": "energy-icons:ice-melt-48-bold",
	});
}

export default Component;
