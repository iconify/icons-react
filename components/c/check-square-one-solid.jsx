import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eic95nb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eic95nb5i"/>`,
		"fallback": "mynaui:check-square-one-solid",
	});
}

export default Component;
