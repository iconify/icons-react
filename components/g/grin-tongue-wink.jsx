import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezytwg27k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezytwg27k"/>`,
		"fallback": "fa7-regular:grin-tongue-wink",
	});
}

export default Component;
