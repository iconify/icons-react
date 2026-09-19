import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw5nfdb1w.css';
import '../../css/n/nj83mcbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw5nfdb1w"/><path class="nj83mcbyz"/>`,
		"fallback": "boxicons:dishwasher",
	});
}

export default Component;
