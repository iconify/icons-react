import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geju8gabu.css';
import '../../css/r/rgd00gins.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="geju8gabu"/><path clip-rule="evenodd" class="rgd00gins"/></g>`,
		"fallback": "healthicons:circle-large",
	});
}

export default Component;
