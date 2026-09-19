import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyrkm5qam.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nyrkm5qam"/>`,
		"fallback": "file-icons:freedesktop",
	});
}

export default Component;
