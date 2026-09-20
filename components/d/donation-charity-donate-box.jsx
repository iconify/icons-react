import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tchp8klhx.css';
import '../../css/m/muu4_m-df.css';
import '../../css/r/rf6ucnbyo.css';
import '../../css/e/e4-53qbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tchp8klhx"/><path class="muu4_m-df"/><path class="rf6ucnbyo"/><path class="e4-53qbqj"/></g>`,
		"fallback": "streamline-freehand:donation-charity-donate-box",
	});
}

export default Component;
