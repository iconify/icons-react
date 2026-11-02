import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8vvg729k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8vvg729k"/>`,
		"fallback": "mingcute:hard-drive-upload-line",
	});
}

export default Component;
