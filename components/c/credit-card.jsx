import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ara2-9bfu.css';
import '../../css/l/lqjniiwse.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="ara2-9bfu"/><path class="lqjniiwse"/></g>`,
		"fallback": "system-uicons:credit-card",
	});
}

export default Component;
