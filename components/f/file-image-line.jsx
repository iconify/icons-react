import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8_mbim6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8_mbim6y"/>`,
		"fallback": "ri:file-image-line",
	});
}

export default Component;
