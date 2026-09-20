import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rob-vnojp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rob-vnojp"/>`,
		"fallback": "streamline-ultimate:data-transfer-circle-bold",
	});
}

export default Component;
