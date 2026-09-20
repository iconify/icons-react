import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj264xb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj264xb_a"/>`,
		"fallback": "mynaui:heading-5-solid",
	});
}

export default Component;
