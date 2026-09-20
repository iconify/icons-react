import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeap7yb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeap7yb5a"/>`,
		"fallback": "mynaui:chevron-up-left-solid",
	});
}

export default Component;
