import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqm66bb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqm66bb7e"/>`,
		"fallback": "mynaui:config-solid",
	});
}

export default Component;
