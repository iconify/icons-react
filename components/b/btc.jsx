import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx1192bjs.css';

const viewBox = {"width":1248,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx1192bjs"/>`,
		"fallback": "fa:btc",
	});
}

export default Component;
