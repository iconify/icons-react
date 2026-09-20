import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/seygw-57p.css';
import '../../css/u/up6maobij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="seygw-57p"/><path class="up6maobij"/></g>`,
		"fallback": "mage:globe",
	});
}

export default Component;
