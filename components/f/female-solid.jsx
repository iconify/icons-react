import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu_d6gbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu_d6gbpk"/>`,
		"fallback": "mynaui:female-solid",
	});
}

export default Component;
