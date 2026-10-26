import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moi0xxros.css';
import '../../css/j/j09n9kspr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="moi0xxros"/><path clip-rule="evenodd" class="j09n9kspr"/></g>`,
		"fallback": "healthicons:acupuncture-3-outline",
	});
}

export default Component;
