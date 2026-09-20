import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znw3c4lsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="znw3c4lsq"/>`,
		"fallback": "reicon:card-receive",
	});
}

export default Component;
