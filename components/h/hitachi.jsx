import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rif_rfbrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rif_rfbrm"/>`,
		"fallback": "file-icons:hitachi",
	});
}

export default Component;
