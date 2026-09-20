import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4nlze-9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4nlze-9l"/>`,
		"fallback": "thesvg:ansys",
	});
}

export default Component;
