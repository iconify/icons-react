import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga-m3mb4h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ga-m3mb4h"/>`,
		"fallback": "streamline:database-server-2-solid",
	});
}

export default Component;
