import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njp6pqswu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="njp6pqswu"/>`,
		"fallback": "reicon:floor-lamp",
	});
}

export default Component;
