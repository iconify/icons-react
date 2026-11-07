import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1two7b3n.css';
import '../../css/c/cwkqqicwy.css';
import '../../css/r/rgklaf5rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1two7b3n"/><path class="cwkqqicwy"/><path clip-rule="evenodd" class="rgklaf5rc"/>`,
		"fallback": "solar:chat-square-quote-bold",
	});
}

export default Component;
