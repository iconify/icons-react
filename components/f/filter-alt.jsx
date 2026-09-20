import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c5bmiws_l.css';
import '../../css/k/kubfj7wdf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c5bmiws_l"/><path class="kubfj7wdf"/></g>`,
		"fallback": "marketeq:filter-alt",
	});
}

export default Component;
