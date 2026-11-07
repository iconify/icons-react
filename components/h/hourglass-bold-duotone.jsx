import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g48ucxnqe.css';
import '../../css/i/im3g8pbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g48ucxnqe"/><path class="im3g8pbea"/>`,
		"fallback": "solar:hourglass-bold-duotone",
	});
}

export default Component;
