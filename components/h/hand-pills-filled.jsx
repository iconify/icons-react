import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6j4vc5th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6j4vc5th"/>`,
		"fallback": "reicon:hand-pills-filled",
	});
}

export default Component;
