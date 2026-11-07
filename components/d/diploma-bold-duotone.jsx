import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czpeh31ty.css';
import '../../css/t/t5jlxaboc.css';
import '../../css/k/k4a7g7bap.css';
import '../../css/w/w9i3xxbev.css';
import '../../css/z/z16x9fbjm.css';
import '../../css/e/e31xt_wcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czpeh31ty"/><path class="t5jlxaboc"/><path class="k4a7g7bap"/><path class="w9i3xxbev"/><path class="z16x9fbjm"/><path class="e31xt_wcz"/>`,
		"fallback": "solar:diploma-bold-duotone",
	});
}

export default Component;
