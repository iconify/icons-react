import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g34ucr9rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g34ucr9rq"/>`,
		"fallback": "pixelarticons:google-chrome-solid",
	});
}

export default Component;
