import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijs8fxbia.css';
import '../../css/w/w8537imoy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijs8fxbia"/><path class="w8537imoy"/>`,
		"fallback": "energy-icons:aquifer-20",
	});
}

export default Component;
