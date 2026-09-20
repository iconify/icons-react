import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5omho7-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5omho7-s"/>`,
		"fallback": "nrk:dice-3-active",
	});
}

export default Component;
