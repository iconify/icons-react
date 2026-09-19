import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s92032bsa.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s92032bsa"/>`,
		"fallback": "codicon:chevron-up-compact",
	});
}

export default Component;
