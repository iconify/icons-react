import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdma17b5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdma17b5c"/>`,
		"fallback": "fa-solid:arrows-alt-h",
	});
}

export default Component;
