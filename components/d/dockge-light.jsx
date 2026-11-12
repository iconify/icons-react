import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7z1-odpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7z1-odpv"/>`,
		"fallback": "selfhst:dockge-light",
	});
}

export default Component;
