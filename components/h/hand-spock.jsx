import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3kzyybom.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3kzyybom"/>`,
		"fallback": "fa7-solid:hand-spock",
	});
}

export default Component;
