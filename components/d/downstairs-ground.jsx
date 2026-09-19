import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us-ieyb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us-ieyb7g"/>`,
		"fallback": "cbi:downstairs-ground",
	});
}

export default Component;
