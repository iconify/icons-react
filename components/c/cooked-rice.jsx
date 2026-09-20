import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd2af0bmx.css';
import '../../css/e/e5_g43bxn.css';
import '../../css/t/t56zhebui.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd2af0bmx"/><path class="e5_g43bxn"/><path class="t56zhebui"/>`,
		"fallback": "openmoji:cooked-rice",
	});
}

export default Component;
