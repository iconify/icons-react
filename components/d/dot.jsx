import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoe9-6brl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoe9-6brl"/>`,
		"fallback": "cryptocurrency:dot",
	});
}

export default Component;
