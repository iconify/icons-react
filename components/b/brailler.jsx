import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa28y5a1x.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa28y5a1x"/>`,
		"fallback": "whh:brailler",
	});
}

export default Component;
