import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ykzxdyblb.css';
import '../../css/h/huwrbpl4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ykzxdyblb"/><path class="huwrbpl4e"/></g>`,
		"fallback": "hugeicons:file-play",
	});
}

export default Component;
