import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hgo0pgs3a.css';
import '../../css/p/p-hc53bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hgo0pgs3a"/><path class="p-hc53bai"/></g>`,
		"fallback": "heroicons:chevron-double-up",
	});
}

export default Component;
