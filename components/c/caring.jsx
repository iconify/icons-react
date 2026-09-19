import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/huaijocpa.css';
import '../../css/p/p1x6njbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="huaijocpa"/><path class="p1x6njbog"/></g>`,
		"fallback": "hugeicons:caring",
	});
}

export default Component;
