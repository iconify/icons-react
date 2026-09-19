import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9gzx9b3u.css';
import '../../css/b/b4-ehgb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n9gzx9b3u"/><path class="b4-ehgb1k"/></g>`,
		"fallback": "hugeicons:cabinet-03",
	});
}

export default Component;
