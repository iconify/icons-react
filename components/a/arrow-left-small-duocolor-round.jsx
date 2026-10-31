import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6wn8lbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6wn8lbob"/>`,
		"fallback": "coolicons:arrow-left-small-duocolor-round",
	});
}

export default Component;
