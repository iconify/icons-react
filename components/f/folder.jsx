import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh23mfb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh23mfb0c"/>`,
		"fallback": "noviair:folder",
	});
}

export default Component;
