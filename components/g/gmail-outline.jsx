import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxwf4h5in.css';
import '../../css/b/bqf--ueux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxwf4h5in"/><path clip-rule="evenodd" class="bqf--ueux"/>`,
		"fallback": "basil:gmail-outline",
	});
}

export default Component;
