import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs02q1elk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs02q1elk"/>`,
		"fallback": "fluent-mdl2:fast-forward-eight-x",
	});
}

export default Component;
