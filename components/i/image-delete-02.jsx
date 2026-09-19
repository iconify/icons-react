import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqz5_v7hs.css';
import '../../css/q/q1v4cpbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oqz5_v7hs"/><path class="q1v4cpbjy"/></g>`,
		"fallback": "hugeicons:image-delete-02",
	});
}

export default Component;
