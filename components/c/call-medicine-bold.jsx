import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/encu70b2r.css';
import '../../css/p/pkhtqxbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="encu70b2r"/><path clip-rule="evenodd" class="pkhtqxbpw"/>`,
		"fallback": "solar:call-medicine-bold",
	});
}

export default Component;
