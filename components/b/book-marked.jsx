import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a9bv5977p.css';
import '../../css/o/o4whri-id.css';
import '../../css/e/ezom_3bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="a9bv5977p"/><path class="o4whri-id"/><path class="ezom_3bjx"/></g>`,
		"fallback": "proicons:book-marked",
	});
}

export default Component;
