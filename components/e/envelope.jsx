import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqdv3t5-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqdv3t5-f"/>`,
		"fallback": "pixel:envelope",
	});
}

export default Component;
