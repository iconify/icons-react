import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6_8koigx.css';
import '../../css/u/u7v9-uihg.css';
import '../../css/y/y7fca_9em.css';
import '../../css/b/baxz_3tcy.css';
import '../../css/y/y23tjybgr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6_8koigx"/><path class="u7v9-uihg"/><path class="y7fca_9em"/><path class="baxz_3tcy"/><path class="y23tjybgr"/>`,
		"fallback": "energy-icons:desk-globe-48",
	});
}

export default Component;
