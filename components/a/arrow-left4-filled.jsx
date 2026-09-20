import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb911gb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb911gb4y"/>`,
		"fallback": "reicon:arrow-left4-filled",
	});
}

export default Component;
