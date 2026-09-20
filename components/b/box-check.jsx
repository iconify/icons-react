import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/size2fbdv.css';
import '../../css/u/uk7hokb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="size2fbdv"/><path class="uk7hokb1v"/></g>`,
		"fallback": "mage:box-check",
	});
}

export default Component;
