import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3d8ef5th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3d8ef5th"/>`,
		"fallback": "keyline-icons:hand-closed",
	});
}

export default Component;
