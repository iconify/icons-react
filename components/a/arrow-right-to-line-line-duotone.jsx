import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tgvfhnabb.css';
import '../../css/p/p2xi9gwtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tgvfhnabb"/><path class="p2xi9gwtv"/></g>`,
		"fallback": "solar:arrow-right-to-line-line-duotone",
	});
}

export default Component;
