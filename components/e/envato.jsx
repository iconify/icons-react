import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvduci1qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvduci1qk"/>`,
		"fallback": "thesvg-color:envato",
	});
}

export default Component;
