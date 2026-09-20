import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrhpp6bik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrhpp6bik"/>`,
		"fallback": "selfhst:file-browser-light",
	});
}

export default Component;
