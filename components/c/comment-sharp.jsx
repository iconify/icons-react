import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyrmry45n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyrmry45n"/>`,
		"fallback": "pixelarticons:comment-sharp",
	});
}

export default Component;
