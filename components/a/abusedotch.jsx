import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/barkwccea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="barkwccea"/>`,
		"fallback": "thesvg-color:abusedotch",
	});
}

export default Component;
