import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgt9i3n5t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgt9i3n5t"/>`,
		"fallback": "carbon:error",
	});
}

export default Component;
