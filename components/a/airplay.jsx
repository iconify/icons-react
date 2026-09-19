import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgyf5nwhg.css';
import '../../css/h/h232v2loq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cgyf5nwhg"/><path class="h232v2loq"/></g>`,
		"fallback": "hugeicons:airplay",
	});
}

export default Component;
