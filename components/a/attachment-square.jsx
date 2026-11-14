import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ec-8anrbt.css';
import '../../css/y/ytwighu4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ec-8anrbt"/><path class="ytwighu4n"/></g>`,
		"fallback": "hugeicons:attachment-square",
	});
}

export default Component;
