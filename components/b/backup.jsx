import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk8t634uh.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk8t634uh"/>`,
		"fallback": "whh:backup",
	});
}

export default Component;
