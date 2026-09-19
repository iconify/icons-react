import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-493nb9q.css';
import '../../css/z/znyp0ehev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a-493nb9q"/><path class="znyp0ehev"/></g>`,
		"fallback": "hugeicons:clapping-02",
	});
}

export default Component;
