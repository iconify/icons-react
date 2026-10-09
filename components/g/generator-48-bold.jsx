import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu71a8jkb.css';
import '../../css/a/a6z1s6b1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu71a8jkb"/><path class="a6z1s6b1h"/>`,
		"fallback": "energy-icons:generator-48-bold",
	});
}

export default Component;
