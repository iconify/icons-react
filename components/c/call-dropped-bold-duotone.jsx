import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi6qtibex.css';
import '../../css/j/j05r12o9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi6qtibex"/><path class="j05r12o9z"/>`,
		"fallback": "solar:call-dropped-bold-duotone",
	});
}

export default Component;
