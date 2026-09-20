import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-ugy7b_n.css';
import '../../css/e/eqwq2xb3f.css';
import '../../css/t/t9l38ii3d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-ugy7b_n"/><path class="eqwq2xb3f"/><path class="t9l38ii3d"/></g>`,
		"fallback": "streamline-flex-color:feather-pen",
	});
}

export default Component;
