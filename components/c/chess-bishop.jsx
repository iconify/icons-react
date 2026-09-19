import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w148np-hp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w148np-hp"/>`,
		"fallback": "fa7-regular:chess-bishop",
	});
}

export default Component;
