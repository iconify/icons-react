import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-e5_bbid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-e5_bbid"/>`,
		"fallback": "file-icons:go-old",
	});
}

export default Component;
