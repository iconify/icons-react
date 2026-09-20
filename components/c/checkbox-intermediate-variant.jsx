import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzijn6bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzijn6bcr"/>`,
		"fallback": "mdi:checkbox-intermediate-variant",
	});
}

export default Component;
