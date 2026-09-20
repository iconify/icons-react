import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srpby-b4v.css';
import '../../css/e/effr8obxp.css';
import '../../css/m/m3ckqtbim.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srpby-b4v"/><path class="effr8obxp"/><path class="m3ckqtbim"/>`,
		"fallback": "ooui:diffs-rtl",
	});
}

export default Component;
