import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es6c_hbiu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es6c_hbiu"/>`,
		"fallback": "streamline:device-database-encryption-1",
	});
}

export default Component;
