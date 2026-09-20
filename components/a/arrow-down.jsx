import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcxe_wboo.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcxe_wboo"/>`,
		"fallback": "octicon:arrow-down",
	});
}

export default Component;
