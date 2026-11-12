import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yil_n-e-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yil_n-e-y"/>`,
		"fallback": "tabler:device-imac-flame",
	});
}

export default Component;
