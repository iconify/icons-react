import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/po5fn9bwg.css';
import '../../css/k/k6w48jz1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="po5fn9bwg"/><path class="k6w48jz1z"/></g>`,
		"fallback": "icon-park:crown",
	});
}

export default Component;
