import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsi_di3ke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsi_di3ke"/>`,
		"fallback": "selfhst:dockpeek-light",
	});
}

export default Component;
