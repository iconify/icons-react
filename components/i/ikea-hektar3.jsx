import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx7e5vbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx7e5vbhr"/>`,
		"fallback": "cbi:ikea-hektar3",
	});
}

export default Component;
