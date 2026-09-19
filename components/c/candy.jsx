import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rniplklmo.css';
import '../../css/x/xnficmu9w.css';
import '../../css/p/px6_9g-lf.css';
import '../../css/z/zahaijvin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="rniplklmo"/><path class="xnficmu9w"/><path class="px6_9g-lf"/><path class="zahaijvin"/></g>`,
		"fallback": "icon-park:candy",
	});
}

export default Component;
