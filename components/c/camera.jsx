import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-thqdb7y.css';
import '../../css/w/w-335_d0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-thqdb7y"/><path class="w-335_d0x"/>`,
		"fallback": "bxs:camera",
	});
}

export default Component;
