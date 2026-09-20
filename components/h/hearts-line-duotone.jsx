import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nxswq5bsu.css';
import '../../css/h/hundiocav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nxswq5bsu"/><path class="hundiocav"/></g>`,
		"fallback": "solar:hearts-line-duotone",
	});
}

export default Component;
