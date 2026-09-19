import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgs6ycb0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgs6ycb0c"/>`,
		"fallback": "file-icons:buildkite",
	});
}

export default Component;
