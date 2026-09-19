import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf_yw3b6a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf_yw3b6a"/>`,
		"fallback": "cryptocurrency:2give",
	});
}

export default Component;
