import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbweo4b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbweo4b2w"/>`,
		"fallback": "keyline-icons:arrow-big-up-sharp-duotone",
	});
}

export default Component;
