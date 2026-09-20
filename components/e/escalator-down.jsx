import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/einhko8ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="einhko8ud"/>`,
		"fallback": "mdi:escalator-down",
	});
}

export default Component;
