import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t74iv4v5p.css';
import '../../css/s/shd_p8bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t74iv4v5p"/><path class="shd_p8bcs"/></g>`,
		"fallback": "covid:covid-19-virus-pandemic-2",
	});
}

export default Component;
