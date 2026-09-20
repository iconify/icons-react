import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aucwa7bxt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aucwa7bxt"/>`,
		"fallback": "streamline:home-3",
	});
}

export default Component;
