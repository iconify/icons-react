import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sq685hnjo.css';
import '../../css/q/qzw7xc1cx.css';
import '../../css/l/l_o6mzh0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="sq685hnjo"/><path class="qzw7xc1cx"/><path class="l_o6mzh0s"/></g>`,
		"fallback": "icon-park:cutting",
	});
}

export default Component;
