import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxb7bva-l.css';
import '../../css/m/m6c-bbbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxb7bva-l"/><path class="m6c-bbbaj"/>`,
		"fallback": "token:bolt",
	});
}

export default Component;
