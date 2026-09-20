import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/etgs5ib1v.css';
import '../../css/h/h4kpqabof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="etgs5ib1v"/><path class="h4kpqabof"/></g>`,
		"fallback": "mage:eye",
	});
}

export default Component;
