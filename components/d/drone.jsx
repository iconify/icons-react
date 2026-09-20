import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qr9nffbdu.css';
import '../../css/x/xygsr2wht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qr9nffbdu"/><rect class="xygsr2wht"/></g>`,
		"fallback": "lucide:drone",
	});
}

export default Component;
