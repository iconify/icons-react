import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a_r5v7b0h.css';
import '../../css/b/bqcfm5qbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="a_r5v7b0h"/><path class="bqcfm5qbu"/></g>`,
		"fallback": "iconoir:circle-spark",
	});
}

export default Component;
