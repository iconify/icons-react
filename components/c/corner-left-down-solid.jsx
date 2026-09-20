import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm97v_bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm97v_bki"/>`,
		"fallback": "mynaui:corner-left-down-solid",
	});
}

export default Component;
