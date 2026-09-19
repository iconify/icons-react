import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvo4uuivi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvo4uuivi"/>`,
		"fallback": "dinkie-icons:horse-face",
	});
}

export default Component;
