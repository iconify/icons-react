import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rynh9wbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rynh9wbpx"/>`,
		"fallback": "keyline-icons:git-pull-request-sharp",
	});
}

export default Component;
