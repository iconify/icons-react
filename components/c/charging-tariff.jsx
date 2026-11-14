import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/baf6r5xsc.css';
import '../../css/f/fpneqjbpl.css';
import '../../css/k/k7qnch2qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="baf6r5xsc"/><circle class="fpneqjbpl"/><path class="k7qnch2qn"/></g>`,
		"fallback": "evicons:charging-tariff",
	});
}

export default Component;
