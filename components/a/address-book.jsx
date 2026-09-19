import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsiwd6bcp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsiwd6bcp"/>`,
		"fallback": "fa-solid:address-book",
	});
}

export default Component;
