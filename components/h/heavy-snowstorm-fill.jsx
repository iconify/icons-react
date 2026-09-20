import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckvmpmb0v.css';
import '../../css/c/cgk_qryyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckvmpmb0v"/><path class="cgk_qryyr"/>`,
		"fallback": "mingcute:heavy-snowstorm-fill",
	});
}

export default Component;
