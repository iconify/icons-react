import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e76u3_zod.css';
import '../../css/y/y88jp4b7b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="e76u3_zod"/><path class="y88jp4b7b"/></g>`,
		"fallback": "charm:cog",
	});
}

export default Component;
