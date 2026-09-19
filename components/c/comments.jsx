import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjws7nb3i.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjws7nb3i"/>`,
		"fallback": "fontisto:comments",
	});
}

export default Component;
