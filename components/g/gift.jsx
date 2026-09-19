import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wr23vsbgm.css';
import '../../css/c/c0gywhb-k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="wr23vsbgm"/><path class="c0gywhb-k"/></g>`,
		"fallback": "charm:gift",
	});
}

export default Component;
