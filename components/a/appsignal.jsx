import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9atpku1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9atpku1c"/>`,
		"fallback": "simple-icons:appsignal",
	});
}

export default Component;
