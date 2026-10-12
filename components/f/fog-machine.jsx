import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at6rrrb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at6rrrb7c"/>`,
		"fallback": "cbi:fog-machine",
	});
}

export default Component;
