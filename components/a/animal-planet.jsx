import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7fn06bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7fn06bpt"/>`,
		"fallback": "thesvg:animal-planet",
	});
}

export default Component;
