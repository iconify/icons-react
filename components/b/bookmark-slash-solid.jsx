import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk_wx9b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk_wx9b5v"/>`,
		"fallback": "mynaui:bookmark-slash-solid",
	});
}

export default Component;
