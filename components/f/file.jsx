import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3p7xnusk.css';

const viewBox = {"width":597,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3p7xnusk"/>`,
		"fallback": "ls:file",
	});
}

export default Component;
