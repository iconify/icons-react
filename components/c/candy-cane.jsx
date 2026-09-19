import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms3g9iieh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms3g9iieh"/>`,
		"fallback": "fa-solid:candy-cane",
	});
}

export default Component;
