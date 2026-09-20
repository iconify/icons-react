import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjd3gubjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjd3gubjc"/>`,
		"fallback": "tabler:device-mobile-minus",
	});
}

export default Component;
