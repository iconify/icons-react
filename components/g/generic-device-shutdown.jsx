import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-kfj7bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-kfj7bih"/>`,
		"fallback": "ix:generic-device-shutdown",
	});
}

export default Component;
