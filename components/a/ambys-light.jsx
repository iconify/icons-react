import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h98xrwbio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h98xrwbio"/>`,
		"fallback": "selfhst:ambys-light",
	});
}

export default Component;
