import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsp--cbzq.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsp--cbzq"/>`,
		"fallback": "jam:header",
	});
}

export default Component;
