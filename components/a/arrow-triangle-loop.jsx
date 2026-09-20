import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlha15byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlha15byw"/>`,
		"fallback": "streamline-sharp-color:arrow-triangle-loop",
	});
}

export default Component;
