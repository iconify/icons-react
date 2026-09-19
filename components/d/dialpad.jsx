import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdf4g625i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdf4g625i"/>`,
		"fallback": "bx:dialpad",
	});
}

export default Component;
