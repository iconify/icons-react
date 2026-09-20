import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjxv-8b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjxv-8b0c"/>`,
		"fallback": "tabler:device-ipad-minus",
	});
}

export default Component;
