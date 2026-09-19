import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w39_dhbpm.css';
import '../../css/t/tl1j00uib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w39_dhbpm"/><path class="tl1j00uib"/></g>`,
		"fallback": "hugeicons:calendar-setting-01",
	});
}

export default Component;
