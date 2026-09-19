import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm0-dsbho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm0-dsbho"/>`,
		"fallback": "file-icons:fantom",
	});
}

export default Component;
