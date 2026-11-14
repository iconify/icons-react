import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uyzcsebgw.css';
import '../../css/x/x79mmtbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uyzcsebgw"/><path class="x79mmtbbd"/></g>`,
		"fallback": "evicons:green-power",
	});
}

export default Component;
