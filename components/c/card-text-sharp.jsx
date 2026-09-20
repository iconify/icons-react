import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu5nr2b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu5nr2b-k"/>`,
		"fallback": "pixelarticons:card-text-sharp",
	});
}

export default Component;
