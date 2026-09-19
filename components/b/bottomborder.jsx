import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df4b_9t3c.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df4b_9t3c"/>`,
		"fallback": "whh:bottomborder",
	});
}

export default Component;
