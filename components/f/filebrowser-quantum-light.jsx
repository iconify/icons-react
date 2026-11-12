import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4_720ovn.css';
import '../../css/r/rm6kyddwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4_720ovn"/><path class="rm6kyddwf"/>`,
		"fallback": "selfhst:filebrowser-quantum-light",
	});
}

export default Component;
