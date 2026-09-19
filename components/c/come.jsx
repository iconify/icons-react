import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0l9478oe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0l9478oe"/>`,
		"fallback": "icon-park-solid:come",
	});
}

export default Component;
