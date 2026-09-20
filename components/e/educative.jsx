import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3_mw7w9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3_mw7w9i"/>`,
		"fallback": "thesvg-color:educative",
	});
}

export default Component;
