import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2fh9zbkx.css';
import '../../css/k/kwok6nb8d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="p2fh9zbkx"/><path class="kwok6nb8d"/></g>`,
		"fallback": "charm:calendar",
	});
}

export default Component;
