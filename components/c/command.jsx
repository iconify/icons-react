import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-64qbb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-64qbb6a"/>`,
		"fallback": "withicons-bauhaus:command",
	});
}

export default Component;
