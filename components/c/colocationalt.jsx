import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un4folb7r.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un4folb7r"/>`,
		"fallback": "whh:colocationalt",
	});
}

export default Component;
