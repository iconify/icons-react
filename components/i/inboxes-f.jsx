import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eno-67mfe.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eno-67mfe"/>`,
		"fallback": "jam:inboxes-f",
	});
}

export default Component;
