import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae4p8ufye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae4p8ufye"/>`,
		"fallback": "mynaui:config-vertical",
	});
}

export default Component;
