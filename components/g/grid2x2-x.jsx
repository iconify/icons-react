import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l0bwasb9b.css';
import '../../css/a/a48zonvkd.css';
import '../../css/l/l-cwkic2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l0bwasb9b"/><path class="a48zonvkd"/><path class="l-cwkic2f"/></g>`,
		"fallback": "hugeicons:grid2x2-x",
	});
}

export default Component;
