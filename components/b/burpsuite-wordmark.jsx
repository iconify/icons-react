import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wblly4c6n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wblly4c6n"/>`,
		"fallback": "devicon-plain:burpsuite-wordmark",
	});
}

export default Component;
