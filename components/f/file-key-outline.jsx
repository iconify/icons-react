import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnk3k9x0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnk3k9x0x"/>`,
		"fallback": "mdi:file-key-outline",
	});
}

export default Component;
