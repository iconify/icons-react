import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oma18aclm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oma18aclm"/>`,
		"fallback": "andrsrxn:arrow-right",
	});
}

export default Component;
