import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxr5i9bck.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxr5i9bck"/>`,
		"fallback": "picon:envelope",
	});
}

export default Component;
