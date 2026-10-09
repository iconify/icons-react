import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-x5_513g.css';
import '../../css/c/c4km1paud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-x5_513g"/><path class="c4km1paud"/>`,
		"fallback": "energy-icons:fusion-48-bold",
	});
}

export default Component;
