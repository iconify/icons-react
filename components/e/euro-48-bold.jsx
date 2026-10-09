import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idgsyubvx.css';
import '../../css/j/j1dq0oxyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idgsyubvx"/><path class="j1dq0oxyt"/>`,
		"fallback": "energy-icons:euro-48-bold",
	});
}

export default Component;
