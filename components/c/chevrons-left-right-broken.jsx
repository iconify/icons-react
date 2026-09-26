import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p6h4xl3fg.css';
import '../../css/w/wtmily5br.css';
import '../../css/n/n6rbqf0vy.css';
import '../../css/b/bfthykebc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p6h4xl3fg"/><path class="wtmily5br"/><path class="n6rbqf0vy"/><path class="bfthykebc"/></g>`,
		"fallback": "solar:chevrons-left-right-broken",
	});
}

export default Component;
