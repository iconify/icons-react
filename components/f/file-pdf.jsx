import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phrv23brm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phrv23brm"/>`,
		"fallback": "fa6-solid:file-pdf",
	});
}

export default Component;
