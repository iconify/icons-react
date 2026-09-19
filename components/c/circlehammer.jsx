import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvuvnwh7g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvuvnwh7g"/>`,
		"fallback": "whh:circlehammer",
	});
}

export default Component;
