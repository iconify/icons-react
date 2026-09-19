import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hj7z5ybgc.css';
import '../../css/r/refdwsb5n.css';
import '../../css/i/i1t1lgbyt.css';
import '../../css/b/bp1du6igj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="hj7z5ybgc"/><path class="refdwsb5n"/><path class="i1t1lgbyt"/><path class="bp1du6igj"/></g>`,
		"fallback": "iconoir:donate",
	});
}

export default Component;
