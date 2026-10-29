import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ey1zp4b_a.css';
import '../../css/b/b0q5uxwll.css';
import '../../css/g/gorsochjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ey1zp4b_a"/><path class="b0q5uxwll wm-a"/><path class="gorsochjg"/></g>`,
		"fallback": "withicons:git-pull-request-draft-duo",
	});
}

export default Component;
