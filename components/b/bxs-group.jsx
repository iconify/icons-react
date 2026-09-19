import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvwfwbb0g.css';
import '../../css/p/ptkyfbcbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvwfwbb0g"/><path class="ptkyfbcbp"/>`,
		"fallback": "bx:bxs-group",
	});
}

export default Component;
