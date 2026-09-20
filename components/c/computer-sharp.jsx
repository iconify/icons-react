import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqv05h9mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqv05h9mr"/>`,
		"fallback": "pixelarticons:computer-sharp",
	});
}

export default Component;
