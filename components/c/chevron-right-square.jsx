import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/phyff2juo.css';
import '../../css/w/wjltsrbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="phyff2juo"/><path class="wjltsrbuw"/></g>`,
		"fallback": "mynaui:chevron-right-square",
	});
}

export default Component;
