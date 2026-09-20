import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8gc-8b-e.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8gc-8b-e"/>`,
		"fallback": "jam:eject",
	});
}

export default Component;
