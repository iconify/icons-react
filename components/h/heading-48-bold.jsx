import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycu86rb2t.css';
import '../../css/m/my-nawb0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycu86rb2t"/><path class="my-nawb0y"/>`,
		"fallback": "energy-icons:heading-48-bold",
	});
}

export default Component;
