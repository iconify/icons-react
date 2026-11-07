import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/o/ocuj5ub7r.css';
import '../../css/i/i0clkg5td.css';
import '../../css/b/b_8fxx4ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="ocuj5ub7r"/><path class="i0clkg5td"/><path class="b_8fxx4ds"/>`,
		"fallback": "solar:code-square-bold-duotone",
	});
}

export default Component;
