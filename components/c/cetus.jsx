import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3jdj3btd.css';
import '../../css/t/t61q91bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3jdj3btd"/><path class="t61q91bzs"/>`,
		"fallback": "token:cetus",
	});
}

export default Component;
