import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1-0k9v-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1-0k9v-w"/>`,
		"fallback": "mynaui:edit-solid",
	});
}

export default Component;
