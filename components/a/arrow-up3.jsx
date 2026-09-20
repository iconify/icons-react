import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h0-nxrdnm.css';
import '../../css/k/k2sffac4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h0-nxrdnm"/><path class="k2sffac4p"/></g>`,
		"fallback": "reicon:arrow-up3",
	});
}

export default Component;
