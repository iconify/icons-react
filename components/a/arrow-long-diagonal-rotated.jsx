import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oc2czcb-r.css';
import '../../css/f/fi0klhp5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oc2czcb-r"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="16;0"/></path><path stroke-dashoffset="10" class="fi0klhp5a"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" to="0"/></path></g>`,
		"fallback": "line-md:arrow-long-diagonal-rotated",
	});
}

export default Component;
