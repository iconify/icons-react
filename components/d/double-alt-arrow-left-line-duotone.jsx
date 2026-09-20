import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e11yaqt_p.css';
import '../../css/g/g7hmeacbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e11yaqt_p"/><path class="g7hmeacbh"/></g>`,
		"fallback": "solar:double-alt-arrow-left-line-duotone",
	});
}

export default Component;
