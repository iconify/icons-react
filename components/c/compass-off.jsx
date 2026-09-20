import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmo45ubml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmo45ubml"/>`,
		"fallback": "mdi:compass-off",
	});
}

export default Component;
