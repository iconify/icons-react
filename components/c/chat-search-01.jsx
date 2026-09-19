import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/viajdbm9a.css';
import '../../css/o/o0y4tfbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="viajdbm9a"/><path class="o0y4tfbie"/></g>`,
		"fallback": "hugeicons:chat-search-01",
	});
}

export default Component;
