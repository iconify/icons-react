import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moei0ro1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moei0ro1i"/>`,
		"fallback": "vadivam:command",
	});
}

export default Component;
