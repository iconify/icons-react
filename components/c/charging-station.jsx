import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q00z02bul.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q00z02bul"/>`,
		"fallback": "fa7-solid:charging-station",
	});
}

export default Component;
