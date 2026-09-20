import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb8j3wbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb8j3wbow"/>`,
		"fallback": "thesvg-color:hi-bob",
	});
}

export default Component;
