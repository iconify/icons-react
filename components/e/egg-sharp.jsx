import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac5rqkw9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac5rqkw9o"/>`,
		"fallback": "famicons:egg-sharp",
	});
}

export default Component;
