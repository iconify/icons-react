import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxgotib5b.css';

const viewBox = {"width":138.039,"height":40.145,"left":-1.136,"top":-1.136};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxgotib5b"/>`,
		"fallback": "thesvg-color:dupont",
	});
}

export default Component;
