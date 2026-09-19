import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkyvg6nbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkyvg6nbl"/>`,
		"fallback": "file-icons:actionscript",
	});
}

export default Component;
