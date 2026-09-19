import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuwx2ibae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuwx2ibae"/>`,
		"fallback": "file-icons:adobe-bridge",
	});
}

export default Component;
