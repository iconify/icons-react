import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg4uk4b1t.css';
import '../../css/j/j5r62vbmy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg4uk4b1t"/><path class="j5r62vbmy"/>`,
		"fallback": "energy-icons:forward-20",
	});
}

export default Component;
