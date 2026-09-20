import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz35gbsha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz35gbsha"/>`,
		"fallback": "thesvg:bisecthosting",
	});
}

export default Component;
