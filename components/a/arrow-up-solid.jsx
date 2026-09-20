import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl9q4rsxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl9q4rsxk"/>`,
		"fallback": "mynaui:arrow-up-solid",
	});
}

export default Component;
