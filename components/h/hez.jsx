import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwerzcbov.css';
import '../../css/n/n4xd9jpho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwerzcbov"/><path class="n4xd9jpho"/>`,
		"fallback": "token:hez",
	});
}

export default Component;
