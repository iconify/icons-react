import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/crlmx4b3y.css';
import '../../css/t/t7rsulbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="crlmx4b3y"/><path class="t7rsulbqv"/></g>`,
		"fallback": "hugeicons:folder-move-in",
	});
}

export default Component;
