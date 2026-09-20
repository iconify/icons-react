import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u97rwuj4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u97rwuj4k"/>`,
		"fallback": "streamline-plump:coffee-mug",
	});
}

export default Component;
