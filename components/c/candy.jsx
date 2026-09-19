import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eb-jj88gg.css';
import '../../css/z/z7ffr1kwi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="eb-jj88gg"/><path class="z7ffr1kwi"/></g>`,
		"fallback": "charm:candy",
	});
}

export default Component;
