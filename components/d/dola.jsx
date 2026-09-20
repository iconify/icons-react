import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf70dbbds.css';
import '../../css/r/rwk1vccqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sf70dbbds"/><path class="rwk1vccqi"/>`,
		"fallback": "token:dola",
	});
}

export default Component;
