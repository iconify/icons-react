import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r34rufvhd.css';
import '../../css/v/v51lyqb9f.css';
import '../../css/d/dfm337b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r34rufvhd"/><path class="v51lyqb9f"/><path class="dfm337b_v"/></g>`,
		"fallback": "healthicons:emergency-post-24px",
	});
}

export default Component;
