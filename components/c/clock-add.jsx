import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vi60pbb-p.css';
import '../../css/v/v3wjsub2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vi60pbb-p"/><path class="v3wjsub2s"/></g>`,
		"fallback": "hugeicons:clock-add",
	});
}

export default Component;
