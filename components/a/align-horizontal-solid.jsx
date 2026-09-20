import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlkvb9b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlkvb9b3w"/>`,
		"fallback": "mynaui:align-horizontal-solid",
	});
}

export default Component;
