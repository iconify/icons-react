import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fly0um0iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fly0um0iz"/>`,
		"fallback": "tabler:circle-dotted-letter-e",
	});
}

export default Component;
