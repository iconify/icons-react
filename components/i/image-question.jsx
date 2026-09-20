import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr5me5b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr5me5b2f"/>`,
		"fallback": "uil:image-question",
	});
}

export default Component;
