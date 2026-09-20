import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzik92bzc.css';
import '../../css/q/qstt88dql.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzik92bzc"/><path class="qstt88dql"/>`,
		"fallback": "medical-icon:i-mammography",
	});
}

export default Component;
