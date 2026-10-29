import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvq8oebfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvq8oebfa"/>`,
		"fallback": "withicons:football-solid",
	});
}

export default Component;
