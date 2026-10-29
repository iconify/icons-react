import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euv577dsd.css';
import '../../css/j/jbiv25bih.css';
import '../../css/p/p_al3tbqa.css';
import '../../css/c/c4zxmdp-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="euv577dsd wm-k"/><path class="jbiv25bih wm-k"/><path class="p_al3tbqa wm-k"/><path class="c4zxmdp-i wm-shine"/></g>`,
		"fallback": "withicons-anime:braces",
	});
}

export default Component;
