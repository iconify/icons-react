import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/v/vaqln9rvn.css';
import '../../css/k/ko65f3b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="vaqln9rvn"/><path class="ko65f3b9d"/></g>`,
		"fallback": "streamline-ultimate:alert-octagon-1",
	});
}

export default Component;
