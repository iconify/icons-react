import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dfwwwhkuy.css';
import '../../css/c/cd3vvbcxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dfwwwhkuy"/><path class="cd3vvbcxd"/></g>`,
		"fallback": "hugeicons:barrel",
	});
}

export default Component;
